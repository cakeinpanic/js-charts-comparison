(this["webpackJsonpchart"] = this["webpackJsonpchart"] || []).push([[0],{

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(3);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(282);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__(605);

// EXTERNAL MODULE: ./src/App.css
var App = __webpack_require__(606);

// EXTERNAL MODULE: ./node_modules/react-tabs/esm/index.js + 11 modules
var esm = __webpack_require__(240);

// EXTERNAL MODULE: ./node_modules/react-tabs/style/react-tabs.css
var react_tabs = __webpack_require__(608);

// EXTERNAL MODULE: ./node_modules/echarts-for-react/lib/index.js
var lib = __webpack_require__(551);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./src/data.js
var DEFAULT_DATA=[{'country':'Lithuania','litres':501.9},{'country':'Czechia','litres':301.9},{'country':'Belgium','litres':60},{'country':'The Netherlands','litres':50}];var COLORS=['#953132','#010e2d','#af9969','#03a6e0','#eb5e60','#f9cdce'];
// CONCATENATED MODULE: ./src/utils/pros-cons.js
var pros_cons_ProsCons=function ProsCons(_ref){var pros=_ref.pros,cons=_ref.cons;return/*#__PURE__*/react_default.a.createElement("div",{className:"reasons"},/*#__PURE__*/react_default.a.createElement("ol",{className:"reason-list"},/*#__PURE__*/react_default.a.createElement("h3",null,"Pros:"),pros.map(function(pro){return/*#__PURE__*/react_default.a.createElement("li",{key:pro},pro);})),/*#__PURE__*/react_default.a.createElement("ol",{className:"reason-list"},/*#__PURE__*/react_default.a.createElement("h3",null,"Cons:"),cons.map(function(con){return/*#__PURE__*/react_default.a.createElement("li",{key:con},con);})));};
// CONCATENATED MODULE: ./src/charts/echarts.js
var echarts_pros=['Free(apache license)','Framework agnostic with a react wrapper(even react native wrapper)','very customizable','wonderful documentation','Has ability to work with maps','Used by gitlab: https://about.gitlab.com/blog/2019/09/30/why-we-chose-echarts/'];var echarts_cons=['canvas','react wrapper is maintained not by owners of library'];var echarts_ECharts=function ECharts(){var options={tooltip:{trigger:'item',formatter:'I am customized tooltip <br/>{b}: {c} ({d}%)'},legend:{orient:'vertical',left:10,data:DEFAULT_DATA.map(function(_ref){var country=_ref.country;return country;})},color:COLORS,series:[{name:'Chart',type:'pie',radius:['60%','70%'],avoidLabelOverlap:false,label:{show:true,position:'outside'},emphasis:{label:{show:true,fontSize:'30',fontWeight:'bold'}},labelLine:{show:true},data:DEFAULT_DATA.map(function(_ref2){var country=_ref2.country,litres=_ref2.litres;return{value:litres,name:country};})}]};return/*#__PURE__*/react_default.a.createElement("div",{className:"chart-demo"},/*#__PURE__*/react_default.a.createElement("a",{href:"https://echarts.apache.org/en/index.html",target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react_default.a.createElement("h3",null,"Echarts (42.3K\u2605)")),/*#__PURE__*/react_default.a.createElement(lib_default.a,{option:options,notMerge:true,lazyUpdate:true}),/*#__PURE__*/react_default.a.createElement(pros_cons_ProsCons,{cons:echarts_cons,pros:echarts_pros}));};
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(133);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(134);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js + 5 modules
var createSuper = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/anychart-react/dist/anychart-react.js
var anychart_react = __webpack_require__(552);
var anychart_react_default = /*#__PURE__*/__webpack_require__.n(anychart_react);

// CONCATENATED MODULE: ./src/charts/anychart.js
var anychart_cons=['Paid'];var anychart_pros=['SVG','Great documentation','Very customizable','Vanilla with official react adaptor'];var anychart_Anychart=/*#__PURE__*/function(_PureComponent){Object(inherits["a" /* default */])(Anychart,_PureComponent);var _super=Object(createSuper["a" /* default */])(Anychart);function Anychart(){Object(classCallCheck["a" /* default */])(this,Anychart);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(Anychart,[{key:"render",value:function render(){var complexSettings={width:'100%',height:350,type:'pie',outsideLabelsOffset:'50%',innerRadius:'80%',data:DEFAULT_DATA.map(function(_ref,i){var litres=_ref.litres;return{value:litres,normal:{fill:COLORS[i]}};}),labels:{position:'outside',fontColor:'black',items:DEFAULT_DATA.map(function(_ref2){var country=_ref2.country;return{text:country};})},legend:{items:DEFAULT_DATA.map(function(_ref3,i){var country=_ref3.country;return{text:country,fontColor:COLORS[i],iconFill:{color:COLORS[i]}};}),padding:0}};return/*#__PURE__*/react_default.a.createElement("div",{className:"chart-demo"},/*#__PURE__*/react_default.a.createElement("a",{href:" https://www.anychart.com/",target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react_default.a.createElement("h3",null,"Anycharts  ($)")),/*#__PURE__*/react_default.a.createElement(anychart_react_default.a,complexSettings),/*#__PURE__*/react_default.a.createElement(pros_cons_ProsCons,{pros:anychart_pros,cons:anychart_cons}));}}]);return Anychart;}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/react-apexcharts/dist/react-apexcharts.min.js
var react_apexcharts_min = __webpack_require__(553);
var react_apexcharts_min_default = /*#__PURE__*/__webpack_require__.n(react_apexcharts_min);

// CONCATENATED MODULE: ./src/charts/apex.js
var apex_pros=['Free','SVG','Vanilla with react adaptor'];var apex_cons=['export(?) and SSR for money','Hardly customizable(no offset labels for pie chart for example)'];var apex_ApexChart=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(ApexChart,_Component);var _super=Object(createSuper["a" /* default */])(ApexChart);function ApexChart(props){var _this;Object(classCallCheck["a" /* default */])(this,ApexChart);_this=_super.call(this,props);_this.state={series:DEFAULT_DATA.map(function(_ref){var litres=_ref.litres;return litres;}),options:{fill:{colors:COLORS},plotOptions:{pie:{expandOnClick:false,donut:{size:'85%'}}},chart:{type:'donut',dropShadow:{enabled:false}},tooltip:{fillSeriesColor:true},dataLabels:{textAnchor:'end',distributed:true,offsetX:'50px',style:{fontSize:"15px",colors:['white']},dropShadow:{enabled:true}},legend:{labels:{colors:COLORS},markers:{fillColors:COLORS}},labels:DEFAULT_DATA.map(function(_ref2){var country=_ref2.country;return country;})}};return _this;}Object(createClass["a" /* default */])(ApexChart,[{key:"render",value:function render(){return/*#__PURE__*/react_default.a.createElement("div",{className:"chart-demo"},/*#__PURE__*/react_default.a.createElement("a",{href:"https://apexcharts.com/javascript-chart-demos/",target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react_default.a.createElement("h3",null,"Apex charts (9.2K\u2605)")),/*#__PURE__*/react_default.a.createElement("div",{id:"chart"},/*#__PURE__*/react_default.a.createElement(react_apexcharts_min_default.a,{options:this.state.options,series:this.state.series,type:this.state.options.chart.type,height:250})),/*#__PURE__*/react_default.a.createElement(pros_cons_ProsCons,{cons:apex_cons,pros:apex_pros}));}}]);return ApexChart;}(react["Component"]);
// EXTERNAL MODULE: ./node_modules/react-chartjs-2/es/index.js
var es = __webpack_require__(554);

// CONCATENATED MODULE: ./src/charts/chartjs.js
var chartjs_pros=['Free','framework agnostic with a react wrapper'];var chartjs_cons=['Hardly customizable(no possibility to add labels to each part)','canvas','react wrapper maintained not by devs of charts itself'];var chartjs_ChartJS=function ChartJS(){// And for a doughnut chart
var options={cutoutPercentage:90};var data={labels:DEFAULT_DATA.map(function(_ref){var country=_ref.country;return country;}),datasets:[{data:DEFAULT_DATA.map(function(_ref2){var litres=_ref2.litres;return litres;}),borderWidth:10,backgroundColor:COLORS,hoverBackgroundColor:COLORS}]};return/*#__PURE__*/react_default.a.createElement("div",{className:"chart-demo"},/*#__PURE__*/react_default.a.createElement("a",{href:"https://www.chartjs.org/docs/latest/",target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react_default.a.createElement("h3",null,"Chartjs (49.8K\u2605)")),/*#__PURE__*/react_default.a.createElement(es["Doughnut"],{className:"chart",data:data,options:options,height:100}),/*#__PURE__*/react_default.a.createElement(pros_cons_ProsCons,{cons:chartjs_cons,pros:chartjs_pros}));};
// EXTERNAL MODULE: ./node_modules/@amcharts/amcharts4/core.js + 20 modules
var core = __webpack_require__(239);

// EXTERNAL MODULE: ./node_modules/@amcharts/amcharts4/charts.js + 91 modules
var charts = __webpack_require__(385);

// EXTERNAL MODULE: ./node_modules/@amcharts/amcharts4/themes/animated.js + 1 modules
var animated = __webpack_require__(573);

// CONCATENATED MODULE: ./src/charts/amcharts.js
core["d" /* useTheme */](animated["a" /* default */]);var amcharts_pros=['Very customizable','SVG','Framework agnostic, has official react wrapper'];var amcharts_cons=['Expensive(with maps even more)','Declarative: not nice to read or move from it to another library'];var amcharts_Amacharts=/*#__PURE__*/function(_Component){Object(inherits["a" /* default */])(Amacharts,_Component);var _super=Object(createSuper["a" /* default */])(Amacharts);function Amacharts(){Object(classCallCheck["a" /* default */])(this,Amacharts);return _super.apply(this,arguments);}Object(createClass["a" /* default */])(Amacharts,[{key:"componentDidMount",value:function componentDidMount(){// Create chart instance
var chart=core["b" /* create */]('chartdiv',charts["a" /* PieChart */]);// Add data
chart.data=DEFAULT_DATA;// Add and configure Series
var pieSeries=chart.series.push(new charts["b" /* PieSeries */]());pieSeries.dataFields.value='litres';pieSeries.dataFields.category='country';pieSeries.colors.list=COLORS.map(function(c){return core["a" /* color */](c);});// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius=core["c" /* percent */](90);// Set up fills
pieSeries.slices.template.fillOpacity=1;var hs=pieSeries.slices.template.states.getKey('hover');hs.properties.scale=1;hs.properties.fillOpacity=0.5;}},{key:"componentWillUnmount",value:function componentWillUnmount(){if(this.chart){this.chart.dispose();}}},{key:"render",value:function render(){return/*#__PURE__*/react_default.a.createElement("div",{className:"chart-demo"},/*#__PURE__*/react_default.a.createElement("a",{href:"https://www.amcharts.com/",target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react_default.a.createElement("h3",null,"Amcharts ($)")),/*#__PURE__*/react_default.a.createElement("div",{id:"chartdiv",style:{width:'600px',height:'300px'}}),/*#__PURE__*/react_default.a.createElement(pros_cons_ProsCons,{cons:amcharts_cons,pros:amcharts_pros}));}}]);return Amacharts;}(react["Component"]);/* harmony default export */ var amcharts = (amcharts_Amacharts);
// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(230);

// EXTERNAL MODULE: ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(233);

// EXTERNAL MODULE: ./node_modules/recharts/es6/index.js + 99 modules
var es6 = __webpack_require__(238);

// CONCATENATED MODULE: ./src/charts/recahrts.js
var RADIAN=Math.PI/180;var recahrts_pros=['Free','svg'];var recahrts_cons=['React only','Well customizable'];var recahrts_renderCustomizedLabel=function renderCustomizedLabel(_ref){var cx=_ref.cx,cy=_ref.cy,midAngle=_ref.midAngle,innerRadius=_ref.innerRadius,outerRadius=_ref.outerRadius,percent=_ref.percent,index=_ref.index;var radius=innerRadius+(outerRadius-innerRadius)*2;var x=cx+radius*Math.cos(-midAngle*RADIAN);var y=cy+radius*Math.sin(-midAngle*RADIAN);return/*#__PURE__*/react_default.a.createElement("text",{x:x,y:y,fill:"black",textAnchor:x>cx?'start':'end',dominantBaseline:"central"},DEFAULT_DATA[index].country);};var recahrts_Rechart=/*#__PURE__*/function(_PureComponent){Object(inherits["a" /* default */])(Rechart,_PureComponent);var _super=Object(createSuper["a" /* default */])(Rechart);function Rechart(){var _this;Object(classCallCheck["a" /* default */])(this,Rechart);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_super.call.apply(_super,[this].concat(args));_this.data=DEFAULT_DATA;_this.colors=COLORS;_this.state={opacity:{uv:1,pv:1}};_this.handleMouseEnter=function(o){var dataKey=o.dataKey;var opacity=_this.state.opacity;_this.setState({opacity:Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},opacity),{},Object(defineProperty["a" /* default */])({},dataKey,0.5))});};_this.handleMouseLeave=function(o){var dataKey=o.dataKey;var opacity=_this.state.opacity;_this.setState({opacity:Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({},opacity),{},Object(defineProperty["a" /* default */])({},dataKey,1))});};return _this;}Object(createClass["a" /* default */])(Rechart,[{key:"render",value:function render(){var _this2=this;return/*#__PURE__*/react_default.a.createElement("div",{className:"chart-demo"},/*#__PURE__*/react_default.a.createElement("a",{href:"https://recharts.org/",target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react_default.a.createElement("h3",null,"Recharts (14.5K\u2605)")),/*#__PURE__*/react_default.a.createElement(es6["d" /* PieChart */],{width:500,height:300},/*#__PURE__*/react_default.a.createElement(es6["b" /* Legend */],{onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),/*#__PURE__*/react_default.a.createElement(es6["c" /* Pie */],{data:this.data,dataKey:"litres",nameKey:"country",innerRadius:70,outerRadius:90,fill:"#82ca9d",label:recahrts_renderCustomizedLabel},this.data.map(function(entry,index){return/*#__PURE__*/react_default.a.createElement(es6["a" /* Cell */],{key:"cell-".concat(index),fill:_this2.colors[index]});}))),/*#__PURE__*/react_default.a.createElement(pros_cons_ProsCons,{cons:recahrts_cons,pros:recahrts_pros}));}}]);return Rechart;}(react["PureComponent"]);
// EXTERNAL MODULE: ./node_modules/react-chartist/dist/index.js
var dist = __webpack_require__(379);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/chartist-plugin-legend/chartist-plugin-legend.js
var chartist_plugin_legend = __webpack_require__(565);
var chartist_plugin_legend_default = /*#__PURE__*/__webpack_require__.n(chartist_plugin_legend);

// EXTERNAL MODULE: ./node_modules/chartist-hover/chartist-hover.js
var chartist_hover = __webpack_require__(566);
var chartist_hover_default = /*#__PURE__*/__webpack_require__.n(chartist_hover);

// CONCATENATED MODULE: ./src/charts/chartist.js
var chartist_pros=['Free','SVG','Very customisable(gives access to full control of SVG)','Framework agnostic with a react wrapper'];var chartist_cons=['React wrapper is maintained not by owners of library','Documentation is bad','All additions(legend, tooltip, interactivity) are opensource plugins with doubted support','To customise sometimes need to dive into SVG'];var chartist_Chartist=function Chartist(){var data={labels:DEFAULT_DATA.map(function(_ref){var country=_ref.country;return country;}),series:DEFAULT_DATA.map(function(_ref2){var litres=_ref2.litres;return litres;})};var options={donut:true,height:300,donutWidth:20,donutSolid:true,startAngle:270,showLabel:true,showLine:true,chartPadding:40,labelOffset:30,labelDirection:'explode',plugins:[chartist_plugin_legend_default()(),chartist_hover_default()({onMouseEnter:function onMouseEnter(){console.log(456);},triggerSelector:'.ct-slice-donut-solid'})]};var listener={draw:function draw(data,i){data.element._node.setAttribute('style','fill:'+COLORS[data.index]+';color:'+COLORS[data.index]);}};return/*#__PURE__*/react_default.a.createElement("div",{className:"chart-demo"},/*#__PURE__*/react_default.a.createElement("a",{href:"https://gionkunz.github.io/chartist-js/",target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react_default.a.createElement("h3",null,"Chartist (12.3K\u2605)")),/*#__PURE__*/react_default.a.createElement(dist_default.a,{data:data,options:options,listener:listener,type:"Pie"}),/*#__PURE__*/react_default.a.createElement(pros_cons_ProsCons,{cons:chartist_cons,pros:chartist_pros}));};
// EXTERNAL MODULE: ./node_modules/@nivo/pie/dist/nivo-pie.esm.js + 110 modules
var nivo_pie_esm = __webpack_require__(572);

// CONCATENATED MODULE: ./src/charts/nivo.js
var nivo_pros=['Free','SVG/Canvas','Good documentation with a playground','Customizable'];var nivo_cons=['React only(but not complicated to migrate to any framework-agnostic solution)'];var nivo_Nivo=function Nivo(){var options={data:DEFAULT_DATA.map(function(_ref){var country=_ref.country,litres=_ref.litres;return{id:country,value:litres};}),margin:{top:40,right:200,bottom:40,left:80},pixelRatio:2,innerRadius:0.8,padAngle:0.7,cornerRadius:0,colors:COLORS,borderColor:{from:'color',modifiers:[['darker',0.6]]},radialLabelsSkipAngle:10,radialLabelsTextXOffset:6,radialLabelsTextColor:'#333333',radialLabelsLinkOffset:0,radialLabelsLinkDiagonalLength:16,radialLabelsLinkHorizontalLength:24,radialLabelsLinkStrokeWidth:1,radialLabelsLinkColor:{from:'color'},slicesLabelsSkipAngle:10,slicesLabelsTextColor:'white',enableSlicesLabels:false,animate:true,motionStiffness:90,motionDamping:15,defs:[{id:'dots',type:'patternDots',background:'inherit',color:'rgba(255, 255, 255, 0.3)',size:4,padding:1,stagger:true},{id:'lines',type:'patternLines',background:'inherit',color:'rgba(255, 255, 255, 0.3)',rotation:-45,lineWidth:6,spacing:10}],legends:[{anchor:'right',direction:'column',translateX:140,itemWidth:60,itemHeight:14,itemsSpacing:2,symbolSize:14,symbolShape:'circle'}]};return/*#__PURE__*/react_default.a.createElement("div",{className:"chart-demo"},/*#__PURE__*/react_default.a.createElement("a",{href:"https://nivo.rocks",target:"_blank",rel:"noopener noreferrer"},/*#__PURE__*/react_default.a.createElement("h3",null,"Nivo (7.4K\u2605)")),/*#__PURE__*/react_default.a.createElement("div",{style:{height:350,width:'100%'}},/*#__PURE__*/react_default.a.createElement(nivo_pie_esm["a" /* ResponsivePie */],options)),/*#__PURE__*/react_default.a.createElement(pros_cons_ProsCons,{cons:nivo_cons,pros:nivo_pros}));};
// CONCATENATED MODULE: ./src/utils/all-charts-demo.js
var all_charts_demo_AllChartsDemo=function AllChartsDemo(){var demos=[{name:'Nivo',component:/*#__PURE__*/react_default.a.createElement(nivo_Nivo,null)},{name:'Chartist',component:/*#__PURE__*/react_default.a.createElement(chartist_Chartist,null)},{name:'Ecahrts',component:/*#__PURE__*/react_default.a.createElement(echarts_ECharts,null)},{name:'Apex',component:/*#__PURE__*/react_default.a.createElement(apex_ApexChart,null)},{name:'Anychart',component:/*#__PURE__*/react_default.a.createElement(anychart_Anychart,null)},{name:'Chartjs',component:/*#__PURE__*/react_default.a.createElement(chartjs_ChartJS,null)},{name:'Amcharts',component:/*#__PURE__*/react_default.a.createElement(amcharts,null)},{name:'Recharts',component:/*#__PURE__*/react_default.a.createElement(recahrts_Rechart,null)}];return/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement("h1",null,"Javascript chart libraries comparison"),/*#__PURE__*/react_default.a.createElement(esm["d" /* Tabs */],null,/*#__PURE__*/react_default.a.createElement(esm["b" /* TabList */],null,demos.map(function(_ref){var name=_ref.name;return/*#__PURE__*/react_default.a.createElement(esm["a" /* Tab */],{key:name},name);})),demos.map(function(_ref2,i){var component=_ref2.component;return/*#__PURE__*/react_default.a.createElement(esm["c" /* TabPanel */],{key:i},component);})));};
// CONCATENATED MODULE: ./src/App.js
function App_App(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(all_charts_demo_AllChartsDemo,null));}/* harmony default export */ var src_App = (App_App);
// CONCATENATED MODULE: ./src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if( true&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/js-charts-comparison",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="".concat("/js-charts-comparison","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log('This web app is being served cache-first by a service '+'worker. To learn more, visit https://bit.ly/CRA-PWA');});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log('New content is available and will be used when all '+'tabs for this page are closed. See https://bit.ly/CRA-PWA.');// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl,{headers:{'Service-Worker':'script'}}).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get('content-type');if(response.status===404||contentType!=null&&contentType.indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();}).catch(function(error){console.error(error.message);});}}
// CONCATENATED MODULE: ./src/index.js
react_dom_default.a.render(/*#__PURE__*/react_default.a.createElement(react_default.a.StrictMode,null,/*#__PURE__*/react_default.a.createElement(src_App,null)),document.getElementById('root'));// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1140);


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[600,1,3]]]);
//# sourceMappingURL=main.4f679d51.chunk.js.map