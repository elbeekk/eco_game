// coverage:ignore-file
// GENERATED CODE - DO NOT MODIFY BY HAND
// ignore_for_file: type=lint
// ignore_for_file: unused_element, deprecated_member_use, deprecated_member_use_from_same_package, use_function_type_syntax_for_parameters, unnecessary_const, avoid_init_to_null, invalid_override_different_default_values_named, prefer_expression_function_bodies, annotate_overrides, invalid_annotation_target, unnecessary_question_mark

part of 'message_bloc.dart';

// **************************************************************************
// FreezedGenerator
// **************************************************************************

T _$identity<T>(T value) => value;

final _privateConstructorUsedError = UnsupportedError(
    'It seems like you constructed your class using `MyClass._()`. This constructor is only meant to be used by freezed and you are not supposed to need it nor use it.\nPlease check the documentation here for more information: https://github.com/rrousselGit/freezed#adding-getters-and-methods-to-our-models');

/// @nodoc
mixin _$MessageEvent {
  dynamic Function(String) get onError => throw _privateConstructorUsedError;
  Function get onSuccess => throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
            dynamic Function(String) onError, Function onSuccess)
        readMessage,
    required TResult Function(
            dynamic Function(String) onError, Function onSuccess)
        setIntroMessages,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(dynamic Function(String) onError, Function onSuccess)?
        readMessage,
    TResult? Function(dynamic Function(String) onError, Function onSuccess)?
        setIntroMessages,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(dynamic Function(String) onError, Function onSuccess)?
        readMessage,
    TResult Function(dynamic Function(String) onError, Function onSuccess)?
        setIntroMessages,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ReadMessage value) readMessage,
    required TResult Function(SetIntroMessages value) setIntroMessages,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ReadMessage value)? readMessage,
    TResult? Function(SetIntroMessages value)? setIntroMessages,
  }) =>
      throw _privateConstructorUsedError;
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ReadMessage value)? readMessage,
    TResult Function(SetIntroMessages value)? setIntroMessages,
    required TResult orElse(),
  }) =>
      throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $MessageEventCopyWith<MessageEvent> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $MessageEventCopyWith<$Res> {
  factory $MessageEventCopyWith(
          MessageEvent value, $Res Function(MessageEvent) then) =
      _$MessageEventCopyWithImpl<$Res, MessageEvent>;
  @useResult
  $Res call({dynamic Function(String) onError, Function onSuccess});
}

/// @nodoc
class _$MessageEventCopyWithImpl<$Res, $Val extends MessageEvent>
    implements $MessageEventCopyWith<$Res> {
  _$MessageEventCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? onError = null,
    Object? onSuccess = null,
  }) {
    return _then(_value.copyWith(
      onError: null == onError
          ? _value.onError
          : onError // ignore: cast_nullable_to_non_nullable
              as dynamic Function(String),
      onSuccess: null == onSuccess
          ? _value.onSuccess
          : onSuccess // ignore: cast_nullable_to_non_nullable
              as Function,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$ReadMessageImplCopyWith<$Res>
    implements $MessageEventCopyWith<$Res> {
  factory _$$ReadMessageImplCopyWith(
          _$ReadMessageImpl value, $Res Function(_$ReadMessageImpl) then) =
      __$$ReadMessageImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({dynamic Function(String) onError, Function onSuccess});
}

/// @nodoc
class __$$ReadMessageImplCopyWithImpl<$Res>
    extends _$MessageEventCopyWithImpl<$Res, _$ReadMessageImpl>
    implements _$$ReadMessageImplCopyWith<$Res> {
  __$$ReadMessageImplCopyWithImpl(
      _$ReadMessageImpl _value, $Res Function(_$ReadMessageImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? onError = null,
    Object? onSuccess = null,
  }) {
    return _then(_$ReadMessageImpl(
      onError: null == onError
          ? _value.onError
          : onError // ignore: cast_nullable_to_non_nullable
              as dynamic Function(String),
      onSuccess: null == onSuccess
          ? _value.onSuccess
          : onSuccess // ignore: cast_nullable_to_non_nullable
              as Function,
    ));
  }
}

/// @nodoc

class _$ReadMessageImpl implements ReadMessage {
  const _$ReadMessageImpl({required this.onError, required this.onSuccess});

  @override
  final dynamic Function(String) onError;
  @override
  final Function onSuccess;

  @override
  String toString() {
    return 'MessageEvent.readMessage(onError: $onError, onSuccess: $onSuccess)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$ReadMessageImpl &&
            (identical(other.onError, onError) || other.onError == onError) &&
            (identical(other.onSuccess, onSuccess) ||
                other.onSuccess == onSuccess));
  }

  @override
  int get hashCode => Object.hash(runtimeType, onError, onSuccess);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$ReadMessageImplCopyWith<_$ReadMessageImpl> get copyWith =>
      __$$ReadMessageImplCopyWithImpl<_$ReadMessageImpl>(this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
            dynamic Function(String) onError, Function onSuccess)
        readMessage,
    required TResult Function(
            dynamic Function(String) onError, Function onSuccess)
        setIntroMessages,
  }) {
    return readMessage(onError, onSuccess);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(dynamic Function(String) onError, Function onSuccess)?
        readMessage,
    TResult? Function(dynamic Function(String) onError, Function onSuccess)?
        setIntroMessages,
  }) {
    return readMessage?.call(onError, onSuccess);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(dynamic Function(String) onError, Function onSuccess)?
        readMessage,
    TResult Function(dynamic Function(String) onError, Function onSuccess)?
        setIntroMessages,
    required TResult orElse(),
  }) {
    if (readMessage != null) {
      return readMessage(onError, onSuccess);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ReadMessage value) readMessage,
    required TResult Function(SetIntroMessages value) setIntroMessages,
  }) {
    return readMessage(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ReadMessage value)? readMessage,
    TResult? Function(SetIntroMessages value)? setIntroMessages,
  }) {
    return readMessage?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ReadMessage value)? readMessage,
    TResult Function(SetIntroMessages value)? setIntroMessages,
    required TResult orElse(),
  }) {
    if (readMessage != null) {
      return readMessage(this);
    }
    return orElse();
  }
}

abstract class ReadMessage implements MessageEvent {
  const factory ReadMessage(
      {required final dynamic Function(String) onError,
      required final Function onSuccess}) = _$ReadMessageImpl;

  @override
  dynamic Function(String) get onError;
  @override
  Function get onSuccess;
  @override
  @JsonKey(ignore: true)
  _$$ReadMessageImplCopyWith<_$ReadMessageImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class _$$SetIntroMessagesImplCopyWith<$Res>
    implements $MessageEventCopyWith<$Res> {
  factory _$$SetIntroMessagesImplCopyWith(_$SetIntroMessagesImpl value,
          $Res Function(_$SetIntroMessagesImpl) then) =
      __$$SetIntroMessagesImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({dynamic Function(String) onError, Function onSuccess});
}

/// @nodoc
class __$$SetIntroMessagesImplCopyWithImpl<$Res>
    extends _$MessageEventCopyWithImpl<$Res, _$SetIntroMessagesImpl>
    implements _$$SetIntroMessagesImplCopyWith<$Res> {
  __$$SetIntroMessagesImplCopyWithImpl(_$SetIntroMessagesImpl _value,
      $Res Function(_$SetIntroMessagesImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? onError = null,
    Object? onSuccess = null,
  }) {
    return _then(_$SetIntroMessagesImpl(
      onError: null == onError
          ? _value.onError
          : onError // ignore: cast_nullable_to_non_nullable
              as dynamic Function(String),
      onSuccess: null == onSuccess
          ? _value.onSuccess
          : onSuccess // ignore: cast_nullable_to_non_nullable
              as Function,
    ));
  }
}

/// @nodoc

class _$SetIntroMessagesImpl implements SetIntroMessages {
  const _$SetIntroMessagesImpl(
      {required this.onError, required this.onSuccess});

  @override
  final dynamic Function(String) onError;
  @override
  final Function onSuccess;

  @override
  String toString() {
    return 'MessageEvent.setIntroMessages(onError: $onError, onSuccess: $onSuccess)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$SetIntroMessagesImpl &&
            (identical(other.onError, onError) || other.onError == onError) &&
            (identical(other.onSuccess, onSuccess) ||
                other.onSuccess == onSuccess));
  }

  @override
  int get hashCode => Object.hash(runtimeType, onError, onSuccess);

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$SetIntroMessagesImplCopyWith<_$SetIntroMessagesImpl> get copyWith =>
      __$$SetIntroMessagesImplCopyWithImpl<_$SetIntroMessagesImpl>(
          this, _$identity);

  @override
  @optionalTypeArgs
  TResult when<TResult extends Object?>({
    required TResult Function(
            dynamic Function(String) onError, Function onSuccess)
        readMessage,
    required TResult Function(
            dynamic Function(String) onError, Function onSuccess)
        setIntroMessages,
  }) {
    return setIntroMessages(onError, onSuccess);
  }

  @override
  @optionalTypeArgs
  TResult? whenOrNull<TResult extends Object?>({
    TResult? Function(dynamic Function(String) onError, Function onSuccess)?
        readMessage,
    TResult? Function(dynamic Function(String) onError, Function onSuccess)?
        setIntroMessages,
  }) {
    return setIntroMessages?.call(onError, onSuccess);
  }

  @override
  @optionalTypeArgs
  TResult maybeWhen<TResult extends Object?>({
    TResult Function(dynamic Function(String) onError, Function onSuccess)?
        readMessage,
    TResult Function(dynamic Function(String) onError, Function onSuccess)?
        setIntroMessages,
    required TResult orElse(),
  }) {
    if (setIntroMessages != null) {
      return setIntroMessages(onError, onSuccess);
    }
    return orElse();
  }

  @override
  @optionalTypeArgs
  TResult map<TResult extends Object?>({
    required TResult Function(ReadMessage value) readMessage,
    required TResult Function(SetIntroMessages value) setIntroMessages,
  }) {
    return setIntroMessages(this);
  }

  @override
  @optionalTypeArgs
  TResult? mapOrNull<TResult extends Object?>({
    TResult? Function(ReadMessage value)? readMessage,
    TResult? Function(SetIntroMessages value)? setIntroMessages,
  }) {
    return setIntroMessages?.call(this);
  }

  @override
  @optionalTypeArgs
  TResult maybeMap<TResult extends Object?>({
    TResult Function(ReadMessage value)? readMessage,
    TResult Function(SetIntroMessages value)? setIntroMessages,
    required TResult orElse(),
  }) {
    if (setIntroMessages != null) {
      return setIntroMessages(this);
    }
    return orElse();
  }
}

abstract class SetIntroMessages implements MessageEvent {
  const factory SetIntroMessages(
      {required final dynamic Function(String) onError,
      required final Function onSuccess}) = _$SetIntroMessagesImpl;

  @override
  dynamic Function(String) get onError;
  @override
  Function get onSuccess;
  @override
  @JsonKey(ignore: true)
  _$$SetIntroMessagesImplCopyWith<_$SetIntroMessagesImpl> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
mixin _$MessageState {
  MessageModel? get currentMessage => throw _privateConstructorUsedError;
  List<MessageModel> get messages => throw _privateConstructorUsedError;

  @JsonKey(ignore: true)
  $MessageStateCopyWith<MessageState> get copyWith =>
      throw _privateConstructorUsedError;
}

/// @nodoc
abstract class $MessageStateCopyWith<$Res> {
  factory $MessageStateCopyWith(
          MessageState value, $Res Function(MessageState) then) =
      _$MessageStateCopyWithImpl<$Res, MessageState>;
  @useResult
  $Res call({MessageModel? currentMessage, List<MessageModel> messages});
}

/// @nodoc
class _$MessageStateCopyWithImpl<$Res, $Val extends MessageState>
    implements $MessageStateCopyWith<$Res> {
  _$MessageStateCopyWithImpl(this._value, this._then);

  // ignore: unused_field
  final $Val _value;
  // ignore: unused_field
  final $Res Function($Val) _then;

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? currentMessage = freezed,
    Object? messages = null,
  }) {
    return _then(_value.copyWith(
      currentMessage: freezed == currentMessage
          ? _value.currentMessage
          : currentMessage // ignore: cast_nullable_to_non_nullable
              as MessageModel?,
      messages: null == messages
          ? _value.messages
          : messages // ignore: cast_nullable_to_non_nullable
              as List<MessageModel>,
    ) as $Val);
  }
}

/// @nodoc
abstract class _$$MessageStateImplCopyWith<$Res>
    implements $MessageStateCopyWith<$Res> {
  factory _$$MessageStateImplCopyWith(
          _$MessageStateImpl value, $Res Function(_$MessageStateImpl) then) =
      __$$MessageStateImplCopyWithImpl<$Res>;
  @override
  @useResult
  $Res call({MessageModel? currentMessage, List<MessageModel> messages});
}

/// @nodoc
class __$$MessageStateImplCopyWithImpl<$Res>
    extends _$MessageStateCopyWithImpl<$Res, _$MessageStateImpl>
    implements _$$MessageStateImplCopyWith<$Res> {
  __$$MessageStateImplCopyWithImpl(
      _$MessageStateImpl _value, $Res Function(_$MessageStateImpl) _then)
      : super(_value, _then);

  @pragma('vm:prefer-inline')
  @override
  $Res call({
    Object? currentMessage = freezed,
    Object? messages = null,
  }) {
    return _then(_$MessageStateImpl(
      currentMessage: freezed == currentMessage
          ? _value.currentMessage
          : currentMessage // ignore: cast_nullable_to_non_nullable
              as MessageModel?,
      messages: null == messages
          ? _value._messages
          : messages // ignore: cast_nullable_to_non_nullable
              as List<MessageModel>,
    ));
  }
}

/// @nodoc

class _$MessageStateImpl implements _MessageState {
  const _$MessageStateImpl(
      {this.currentMessage, final List<MessageModel> messages = const []})
      : _messages = messages;

  @override
  final MessageModel? currentMessage;
  final List<MessageModel> _messages;
  @override
  @JsonKey()
  List<MessageModel> get messages {
    if (_messages is EqualUnmodifiableListView) return _messages;
    // ignore: implicit_dynamic_type
    return EqualUnmodifiableListView(_messages);
  }

  @override
  String toString() {
    return 'MessageState(currentMessage: $currentMessage, messages: $messages)';
  }

  @override
  bool operator ==(Object other) {
    return identical(this, other) ||
        (other.runtimeType == runtimeType &&
            other is _$MessageStateImpl &&
            (identical(other.currentMessage, currentMessage) ||
                other.currentMessage == currentMessage) &&
            const DeepCollectionEquality().equals(other._messages, _messages));
  }

  @override
  int get hashCode => Object.hash(runtimeType, currentMessage,
      const DeepCollectionEquality().hash(_messages));

  @JsonKey(ignore: true)
  @override
  @pragma('vm:prefer-inline')
  _$$MessageStateImplCopyWith<_$MessageStateImpl> get copyWith =>
      __$$MessageStateImplCopyWithImpl<_$MessageStateImpl>(this, _$identity);
}

abstract class _MessageState implements MessageState {
  const factory _MessageState(
      {final MessageModel? currentMessage,
      final List<MessageModel> messages}) = _$MessageStateImpl;

  @override
  MessageModel? get currentMessage;
  @override
  List<MessageModel> get messages;
  @override
  @JsonKey(ignore: true)
  _$$MessageStateImplCopyWith<_$MessageStateImpl> get copyWith =>
      throw _privateConstructorUsedError;
}
