import 'package:chart_app/src/series/blink_tick_indicator.dart';
import 'package:deriv_chart/deriv_chart.dart';
import 'package:flutter/material.dart';
import 'dart:ui' as ui;

///A class for Blink tick Painter.
class BlinkingTickPainter<T extends BlinkingTickIndicator>
    extends HorizontalBarrierPainter<T> {
  /// Initializes [series].
  BlinkingTickPainter(T series) : super(series);

  @override
  void onPaint({
    required Canvas canvas,
    required Size size,
    required EpochToX epochToX,
    required QuoteToY quoteToY,
    required AnimationInfo animationInfo,
  }) {
    final HorizontalBarrierStyle style =
        series.style as HorizontalBarrierStyle? ?? theme.horizontalBarrierStyle;

    final Paint _paint = Paint()..color = style.color;

    /// Animated Value
    double? animatedValue;

    /// Epoch X
    double? dotX;

    if (series.previousObject == null) {
      animatedValue = series.quote;
      if (series.epoch != null) {
        dotX = epochToX(series.epoch!);
      }
    } else {
      final BarrierObject previousBarrier = series.previousObject!;
      animatedValue = series.quote;

      animatedValue = ui.lerpDouble(
        previousBarrier.quote,
        series.quote,
        animationInfo.currentTickPercent,
      );

      if (series.epoch != null && series.previousObject!.leftEpoch != null) {
        dotX = ui.lerpDouble(
          epochToX(series.previousObject!.leftEpoch!),
          epochToX(series.epoch!),
          animationInfo.currentTickPercent,
        );
      }
    }

    if (animatedValue != null && dotX != null) {
      final double y = quoteToY(animatedValue);

      if (animationInfo.currentTickPercent > 0 &&
          animationInfo.currentTickPercent < 1) {
        YAxisConfig.instance.yAxisClipping(canvas, size, () {
          canvas.drawCircle(
            Offset(dotX!, y),
            4 + (animationInfo.currentTickPercent * 6),
            Paint()..color = _paint.color.withOpacity(0.15),
          );
        });
      }
      YAxisConfig.instance.yAxisClipping(canvas, size, () {
        canvas.drawCircle(
          Offset(dotX!, y),
          4,
          _paint,
        );
      });
    }
  }
}
