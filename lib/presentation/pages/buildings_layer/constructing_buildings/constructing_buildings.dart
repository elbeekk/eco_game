import 'dart:async';
import 'dart:developer';

import 'package:eco_game/application/const_building/const_building_bloc.dart';
import 'package:flutter/material.dart';
import 'package:jiffy/jiffy.dart';
import 'package:percent_indicator/linear_percent_indicator.dart';

import '../../../../infrastructure/models/class/building.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class ConstructingBuilding extends StatefulWidget {
  final BuildingModel building;

  const ConstructingBuilding({super.key, required this.building});

  @override
  State<ConstructingBuilding> createState() => _ConstructingBuildingState();
}

class _ConstructingBuildingState extends State<ConstructingBuilding> {
  update() {
    Timer.periodic(const Duration(milliseconds: 100), (timer) {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return BlocProvider(
      create: (context) => ConstBuildingBloc(),
      child: Positioned(
          top: (widget.building.positionY ?? 0) + 100,
          left: widget.building.positionX ?? 0 + 20,
          child: Stack(
            clipBehavior: Clip.none,
            children: [
              Container(
                height: 50,
                width: 100,
                padding: const EdgeInsets.symmetric(horizontal: 12),
                child: Wrap(
                  children: List.generate(
                    6,
                    (index) => SizedBox(
                      height: 25,
                      width: 25,
                      child: Opacity(
                        opacity: .8,
                        child: Image.asset(
                            "assets/images/game_assets/village/images/TERRAIN SET 1 - DAY.png"),
                      ),
                    ),
                  ),
                ),
              ),
              Positioned(
                top: 0,
                left: 20,
                child: Image.asset(
                    'assets/images/game_assets/village/images/Road Signs/Sign Attention.png'),
              ),
              Positioned(
                top: 0,
                right: 20,
                child: Image.asset(
                    'assets/images/game_assets/village/images/Road Signs/Sign Attention.png'),
              ),
              Positioned(
                bottom: -40,
                left: 0,
                child: Row(
                  children: [
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/roadblock.png'),
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/roadblock.png'),
                  ],
                ),
              ),
              Positioned(
                top: -40,
                left: 0,
                child: Row(
                  children: [
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/roadblock.png'),
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/roadblock.png'),
                  ],
                ),
              ),
              Positioned(
                left: 0,
                top: 0,
                child: Column(
                  children: [
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/cone.png'),
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/cone.png'),
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/cone.png'),
                  ],
                ),
              ),
              Positioned(
                right: 0,
                top: 0,
                child: Column(
                  children: [
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/cone.png'),
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/cone.png'),
                    Image.asset(
                        'assets/images/game_assets/village/images/Road Signs/cone.png'),
                  ],
                ),
              ),
              BlocBuilder<ConstBuildingBloc, ConstBuildingState>(
                buildWhen: (previous, current) => true,
                builder: (context, state) {
                  context.read<ConstBuildingBloc>().add(
                        ConstBuildingEvent.update(
                          time: DateTime.now(),
                        ),
                      );
                  final endTime = DateTime.fromMillisecondsSinceEpoch(
                    int.parse(
                      widget.building.date ?? '0',
                    ),
                  )
                      .add(
                        Duration(
                          minutes:
                              ((widget.building.duration ?? 0) * 60).toInt(),
                        ),
                      )
                      .millisecondsSinceEpoch;
                  final startTime = DateTime.fromMillisecondsSinceEpoch(
                    int.parse(
                      widget.building.date ?? '0',
                    ),
                  ).millisecondsSinceEpoch;
                  final now = state.time.millisecondsSinceEpoch;
                  final duration = Duration(
                    minutes: ((widget.building.duration ?? 0) * 60).toInt(),
                  ).inMilliseconds;
                  final percent = (now - startTime) / duration;
                  return Positioned(
                    top: -80,
                    child: Container(
                      padding: const EdgeInsets.all(5),
                      decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(
                              color: Colors.orange.shade300, width: 1.5)),
                      child: Column(
                        children: [
                          Text(
                            Jiffy.parseFromDateTime(
                              DateTime.fromMillisecondsSinceEpoch(
                                endTime),
                            ).fromNow(),
                            style: const TextStyle(
                              color: Colors.orange,
                            ),
                          ),
                          const SizedBox(
                            height: 5,
                          ),
                          SizedBox(
                            child: LinearPercentIndicator(
                              width: 80,
                              lineHeight: 7,
                              barRadius: const Radius.circular(10),
                              progressColor: Colors.red,
                              backgroundColor: Colors.orange.withOpacity(.1),
                              percent: percent,
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                },
              ),
            ],
          )),
    );
  }
}
