import React, { Component } from 'react';
import { connect } from 'react-redux';
const d3 = require('d3');
const ReactFauxDOM = require('react-faux-dom');

class LineChart extends Component {

  render() {
    const RadarChart = {
      draw: (id, d, options) => {
        const cfg = {
          radius: 5,
          w: 600,
          h: 600,
          factor: 1,
          factorLegend: 0.85,
          levels: 3,
          maxValue: 0,
          radians: 2 * Math.PI,
          opacityArea: 0.5,
          ToRight: 5,
          TranslateX: 80,
          TranslateY: 30,
          ExtraWidthX: 100,
          ExtraWidthY: 100,
          color: d3.scaleOrdinal(d3.schemeCategory10),
        };

        if (typeof options !== 'undefined') {
          for (var i in options) {
            if (typeof options[i] !== 'undefined') {
              cfg[i] = options[i];
            }
          }
        }

      	cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i) {return d3.max(i.map(function(o){return o.value;}))}));
      	let allAxis = (d[0].map(function(i, j){return i.axis}));
        const total = allAxis.length;
        const radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
        const Format = d3.format('%');
        d3.select(id).select('svg').remove();

        const g = d3.select(id)
            .append('svg')
            .attr('width', cfg.w + cfg.ExtraWidthX)
            .attr('height', cfg.h + cfg.ExtraWidthY)
            .append('g')
            .attr('transform', 'translate(' + cfg.TranslateX + ',' + cfg.TranslateY + ')');

        let tooltip;

    	//Circular segments
        for (let j = 0; j < cfg.levels - 1; j++) {
          const levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
          g.selectAll('.levels')
          .data(allAxis)
          .enter()
          .append('svg:line')
          .attr('x1', function(d, i){return levelFactor * (1 - cfg.factor * Math.sin(i * cfg.radians / total));})
          .attr('y1', function(d, i){return levelFactor * (1 - cfg.factor * Math.cos(i * cfg.radians / total));})
          .attr('x2', function(d, i){return levelFactor * (1 - cfg.factor * Math.sin((i + 1) * cfg.radians / total));})
          .attr('y2', function(d, i){return levelFactor * (1 - cfg.factor * Math.cos((i + 1) * cfg.radians / total));})
          .attr('class', 'line')
          .style('stroke', 'grey')
          .style('stroke-opacity', '0.75')
          .style('stroke-width', '0.3px')
          .attr('transform', 'translate(' + (cfg.w / 2 - levelFactor) + ', ' + (cfg.h / 2 - levelFactor) + ')');
        }

    	//Text indicating at what % each level is
        for (let j = 0; j < cfg.levels; j++) {
          const levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
          g.selectAll('.levels')
          .data([1])
          .enter()
          .append('svg:text')
          .attr('x', function(d){ return levelFactor * (1 - cfg.factor * Math.sin(0));})
          .attr('y', function(d){ return levelFactor * (1 - cfg.factor * Math.cos(0));})
          .attr('class', 'legend')
          .style('font-family', 'sans-serif')
          .style('font-size', '10px')
          .attr('transform', 'translate(' + (cfg.w/2-levelFactor + cfg.ToRight) + ', ' + (cfg.h/2-levelFactor) + ')')
          .attr('fill', '#737373')
          .text(Format(( j + 1 ) * cfg.maxValue / cfg.levels ));
        }

        let series = 0;

        const axis = g.selectAll('.axis')
        .data(allAxis)
        .enter()
        .append('g')
        .attr('class', 'axis');

        axis.append('line')
        .attr('x1', cfg.w / 2)
        .attr('y1', cfg.h / 2)
        .attr('x2', function(d, i){ return cfg.w / 2 * ( 1 - cfg.factor * Math.sin( i * cfg.radians / total));})
        .attr('y2', function(d, i){ return cfg.h / 2 * ( 1 - cfg.factor * Math.cos( i * cfg.radians/total));})
        .attr('class', 'line')
        .style('stroke', 'grey')
        .style('stroke-width', '1px');

        axis.append('text')
        .attr('class', 'legend')
        .text(function(d){ return d })
        .style('font-family', 'sans-serif')
        .style('font-size', '11px')
        .attr('text-anchor', 'middle')
        .attr('dy', '1.5em')
        .attr('transform', function(d, i){return 'translate(0, -10)'})
        .attr('x', function(d, i){return cfg.w / 2 * ( 1 - cfg.factorLegend * Math.sin(i * cfg.radians / total)) - 60 * Math.sin(i * cfg.radians / total);})
        .attr('y', function(d, i){return cfg.h / 2 * (1 - Math.cos(i * cfg.radians / total)) - 20 * Math.cos(i * cfg.radians / total);});

        const dataValues = [];
        d.forEach(function(y, x){
          g.selectAll('.nodes')
          .data(y, function(j, i){
            dataValues.push([
              cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)),
              cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
            ]);
          });

          dataValues.push(dataValues[0]);
          g.selectAll('.area')
          .data([dataValues])
          .enter()
          .append('polygon')
          .attr('class', 'radar-chart-serie' + series)
          .style('stroke-width', '2px')
          .style('stroke', cfg.color(series))
          .attr('points', function(d) {
            var str = '';
            for (let pti = 0; pti < d.length; pti++) {
              str = str + d[pti][0]+ ',' + d[pti][1] + ' ';
            }
            return str;
          })
          .style('fill', function(j, i){return cfg.color(series)})
          .style('fill-opacity', cfg.opacityArea)
          .on('mouseover', function (d){
          z = 'polygon.'+ d3.select(this).attr('class');
          g.selectAll('polygon')
          .transition(200)
          .style('fill-opacity', 0.1);
          g.selectAll(z)
          .transition(200)
          .style('fill-opacity', .7);
          })
          .on('mouseout', function(){
          g.selectAll('polygon')
          .transition(200)
          .style('fill-opacity', cfg.opacityArea);
          });
          series++;
          });
          series = 0;


        d.forEach(function(y, x){
          g.selectAll('.nodes')
            .data(y).enter()
          .append('svg:circle')
          .attr('class', 'radar-chart-serie'+series)
          .attr('r', cfg.radius)
          .attr('alt', function(j){return Math.max(j.value, 0)})
          .attr('cx', function(j, i) {
            dataValues.push([
              cfg.w / 2 * (1 - (parseFloat(Math.max(j.value, 0)) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total)),
              cfg.h / 2 * (1 - (parseFloat(Math.max(j.value, 0))/cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total))
            ]);
            return cfg.w / 2 * ( 1 - (Math.max(j.value, 0) / cfg.maxValue) * cfg.factor * Math.sin(i * cfg.radians / total));
          })
          .attr('cy', function(j, i){
            return cfg.h / 2 * (1 - (Math.max(j.value, 0) / cfg.maxValue) * cfg.factor * Math.cos(i * cfg.radians / total));
          })
        .attr('data-id', function(j){return j.axis})
        .style('fill', cfg.color(series)).style('fill-opacity', .9)
        .on('mouseover', function (d){
        newX =  parseFloat(d3.select(this).attr('cx')) - 10;
        newY =  parseFloat(d3.select(this).attr('cy')) - 5;

        tooltip
        .attr('x', newX)
        .attr('y', newY)
        .text(Format(d.value))
        .transition(200)
        .style('opacity', 1);

        z = 'polygon.'+d3.select(this).attr('class');
        g.selectAll('polygon')
        .transition(200)
        .style('fill-opacity', 0.1);
        g.selectAll(z)
        .transition(200)
        .style('fill-opacity', .7);
        })
        .on('mouseout', function(){
        tooltip
        .transition(200)
        .style('opacity', 0);
        g.selectAll('polygon')
        .transition(200)
        .style('fill-opacity', cfg.opacityArea);
        })
        .append('svg:title')
        .text(function(j){return Math.max(j.value, 0)});

        series++;
        });
        //Tooltip
        tooltip = g.append('text')
        .style('opacity', 0)
        .style('font-family', 'sans-serif')
        .style('font-size', '13px');
      },
    };

    const w = 500;
    const h = 500;

    const colorscale = d3.scaleOrdinal(d3.schemeCategory10);

    //Legend titles
    const LegendOptions = ['Smartphone', 'Tablet'];

    // Data
    const topStats = {
      Touchdowns: 16,
      RushingYards: 1674,
      PassingYards: 5489,
      Interceptions: 9,
      Fumbles: 16,
      TwoPointConversionPasses: 9,
      TwoPointConversionRuns: 1,
      PassingCompletionPercentage: 113,
      RushingAttempts: 369,
      ReceivingYardsPerReception: 2109,
      ReceivingYards: 65,
      PassingTouchdowns: 41,
      RushingTouchdowns: 12,
      ReceivingTouchdowns: 12,
    };

    const d = [[]];

    for (const stat in topStats) {
      const statValue = (this.props.players[0][stat] * 100) / topStats[stat];
      d[0].push({ axis: stat, value: (statValue / 100) });
    }

    //Options for the Radar chart, other than default
    const mycfg = {
      w,
      h,
      maxValue: 0.6,
      levels: 6,
      ExtraWidthX: 300
    }


    ////////////////////////////////////////////
    /////////// Initiate legend ////////////////
    ////////////////////////////////////////////
    const node = ReactFauxDOM.createElement('svg');
    const svg = d3.select(node)
    .append('svg')
    .attr('width', w + 300)
    .attr('height', h);

    node.style.setProperty('width', w + 300);
    node.style.setProperty('height', h);
    node.style.setProperty('background', 'white');
    //Call function to draw the Radar chart
    //Will expect that data is in %'s
    RadarChart.draw(node, d, mycfg);


    //Create the title for the legend
    const text = svg.append('text')
    .attr('class', 'title')
    .attr('transform', 'translate(90,0)')
    .attr('x', w - 70)
    .attr('y', 10)
    .attr('font-size', '12px')
    .attr('fill', '#404040')
    .text('What % of owners use a specific service in a week');

      //Initiate Legend
    const legend = svg.append('g')
      .attr('class', 'legend')
      .attr('height', 100)
      .attr('width', 200)
      .attr('transform', 'translate(90,20)');

      //Create colour squares
    legend.selectAll('rect')
      .data(LegendOptions)
      .enter()
      .append('rect')
      .attr('x', w - 65)
      .attr('y', function(d, i){ return i * 20;})
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', function(d, i){ return colorscale(i);});

      //Create text next to squares
    legend.selectAll('text')
      .data(LegendOptions)
      .enter()
      .append('text')
      .attr('x', w - 52)
      .attr('y', function(d, i){ return i * 20 + 9;})
      .attr('font-size', '11px')
      .attr('fill', '#737373')
      .text(function(d) { return d; });

    return (
      <div>{node.toReact()}</div>
    )
   }

}

function mapStateToProps(state) {
  return { players: state.players };
}

export default connect(mapStateToProps)(LineChart);
