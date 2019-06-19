/* eslint-disable sort-keys, no-magic-numbers */
import React from 'react';
import { SuperChart } from '@superset-ui/chart';
import data from './data';

export default [
  {
    renderStory: () => (
      <SuperChart
        chartType="heatmap"
        width={400}
        height={400}
        formData={{
          allColumnsX: 'source',
          allColumnsY: 'target',
          bottomMargin: 'auto',
          canvasImageRendering: 'pixelated',
          leftMargin: 'auto',
          linearColorScheme: 'blue_white_yellow',
          metric: 'sum__value',
          normalized: false,
          showLegend: true,
          showPerc: true,
          showValues: false,
          sortXAxis: 'alpha_asc',
          sortYAxis: 'alpha_asc',
          xscaleInterval: '1',
          yAxisBounds: [null, null],
          yAxisFormat: '.3s',
          yscaleInterval: '1',
        }}
        payload={{ data }}
      />
    ),
    storyName: 'Basic',
    storyPath: 'legacy-|plugin-chart-heatmap|HeatmapChartPlugin',
  },
];
