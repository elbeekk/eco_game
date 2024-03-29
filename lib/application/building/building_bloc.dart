import 'dart:developer';

import 'package:bloc/bloc.dart';
import 'package:eco_game/domain/di/dependancy_manager.dart';
import 'package:eco_game/infrastructure/models/class/building.dart';
import 'package:eco_game/infrastructure/services/constants.dart';
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:uuid/uuid.dart';

import '../../infrastructure/services/local_storage/local_storage.dart';

part 'building_event.dart';

part 'building_state.dart';

part 'building_bloc.freezed.dart';

class BuildingBloc extends Bloc<BuildingEvent, BuildingState> {
  BuildingBloc() : super(const BuildingState()) {
    /// pending
    on<AddPendingBuilding>((event, emit) async {
      emit(state.copyWith(isBuyLoading: true));
      final id = const Uuid().v1();
      final building = event.building.copyWith(
        id: id,
        date: DateTime.now().millisecondsSinceEpoch.toString(),
        isLed: false,
        isRoof: false,
      );
      final res = await buildingRepository.addPendingBuilding(
        building: building,
      );
      res.fold((l) async {
        emit(
          state.copyWith(
            pendingBuildings: [...state.pendingBuildings, building],
          ),
        );
        event.onSuccess.call();
      }, (r) {
        event.onError.call(r);
      });
      emit(state.copyWith(isBuyLoading: false));
    });

    on<RemovePendingBuilding>((event, emit) async {
      final res = await buildingRepository.removePendingBuilding(
          building: event.building);
      res.fold((l) {
        List<BuildingModel> tempList = state.pendingBuildings.toList();
        print("before $tempList");
        tempList.removeWhere((element) {
          if (element.id == event.building.id) {
            return true;
          }
          return false;
        });
        print("after $tempList");
        emit(
          state.copyWith(pendingBuildings: tempList),
        );
        event.onSuccess.call();
      }, (r) {
        event.onError.call(r);
      });
    });

    /// constructing
    on<AddConstructingBuilding>((event, emit) async {
      final res = await buildingRepository.addConstructingBuilding(
          building: event.building);
      await userRepository.addPoints(points: event.building.points ?? 0);
      res.fold((l) {
        List<BuildingModel> tempList = state.pendingBuildings.toList();
        tempList.removeWhere((element) {
          if (element.id == event.building.id) {
            return true;
          }
          return false;
        });
        emit(
          state.copyWith(constructingBuildings: [
            ...state.constructingBuildings,
            event.building
          ], pendingBuildings: tempList),
        );
      }, (r) {});
    });

    on<RemoveConstructingBuilding>((event, emit) async {
      final res = await buildingRepository.removeConstructingBuilding(
          building: event.building);
      res.fold((l) {
        List<BuildingModel> tempList = state.constructingBuildings.toList();
        tempList.removeWhere((element) {
          if (element.id == event.building.id) {
            return true;
          }
          return false;
        });
        emit(
          state.copyWith(constructingBuildings: tempList),
        );
      }, (r) {});
    });

    /// existing
    on<AddExistingBuilding>((event, emit) async {
      final res = await buildingRepository.addExistingBuilding(
          building: event.building);
      res.fold((l) {
        List<BuildingModel> tempList = state.constructingBuildings.toList();
        tempList.removeWhere((element) {
          if (element.id == event.building.id) {
            return true;
          }
          return false;
        });
        emit(
          state.copyWith(
              existingBuildings: [...state.existingBuildings, event.building],
              constructingBuildings: tempList),
        );
      }, (r) {});
    });

    on<RemoveExistingBuilding>((event, emit) async {
      log("logi${ event.building.price ?? 0}");
      final userRes =
          await userRepository.addMoney(money: event.building.price ?? 0);
      final res = await buildingRepository.removeExistingBuilding(
          building: event.building);
      userRes.fold((l) {
        res.fold((l) {
          List<BuildingModel> tempList = state.existingBuildings.toList();
          tempList.removeWhere((element) {
            if (element.id == event.building.id) {
              return true;
            }
            return false;
          });
          emit(
            state.copyWith(existingBuildings: tempList),
          );
          event.onSuccess.call();
        }, (r) {});
      }, (r) {});
    });

    on<UpdatePendingBuilding>((event, emit) async {
      List<BuildingModel> tempList = state.pendingBuildings.toList();
      tempList = tempList.map((element) {
        if (element.id == event.building.id) {
          return element.copyWith(
              positionX: event.building.positionX,
              positionY: event.building.positionY);
        }
        return element;
      }).toList();
      emit(state.copyWith(pendingBuildings: tempList));
      event.onSuccess.call();
    });

    on<GetAll>((event, emit) async {
      log('getting all');
      final pending = await buildingRepository.getBuildings(
          type: BuildingType.pending, docId: LocalStorage.getMe()?.id ?? '');

      pending.fold((l) {
        l.removeWhere((element) => element.id == null);
        emit(state.copyWith(pendingBuildings: l));
      }, (r) => null);

      final constructing = await buildingRepository.getBuildings(
          type: BuildingType.constructing,
          docId: LocalStorage.getMe()?.id ?? '');
      constructing.fold((l) {
        l.removeWhere((element) => element.id == null);
        emit(
          state.copyWith(constructingBuildings: l),
        );
      }, (r) => null);

      final existing = await buildingRepository.getBuildings(
          type: BuildingType.existing, docId: LocalStorage.getMe()?.id ?? '');
      existing.fold((l) {
        l.removeWhere((element) => element.id == null);

        emit(state.copyWith(existingBuildings: l));
      }, (r) => null);
    });

    on<UpgradeLed>((event, emit) async {
      final building = event.building.copyWith(
        isLed: true,
        energy: (event.building.energy ?? 0) + 2,
      );
      final moneyRes = await userRepository.addMoney(
          money: ((building.price ?? 0) * 0.2).toInt() * -1);
      await userRepository.addPoints(points: 20);
      final buildRes = await buildingRepository.upgradeLed(building: building);
      moneyRes.fold((l) {
        buildRes.fold((l) {
          event.onSuccess?.call();
        }, (r) {
          event.onError?.call(r);
        });
      }, (r) {
        event.onError?.call(r);
      });
    });
    on<UpgradeRoof>((event, emit) async {
      final building = event.building.copyWith(
        isRoof: true,
        energy: (event.building.energy ?? 0) + 10,
      );
      await userRepository.addMoney(
          money: ((building.price ?? 0) * 0.7).toInt() * -1);
      await userRepository.addPoints(points: 40);
      final buildRes = await buildingRepository.upgradeRoof(building: building);
      buildRes.fold((l) {
        event.onSuccess?.call();
      }, (r) {
        event.onError?.call(r);
      });
    });
  }
}
