/**
 * Created by Jerry on 16/6/30.
 */
angular.module('myApp', ['ngPrettyJson']);
var app =  angular.module('myApp',[]);

app.controller('echartDemo',function ($scope) {

    $scope.typeOption = {
        type:'bar'
    };
    //默认图形样例
    $scope.chartTypes = {
        "line":{"name": "Some data", "data": [1, 2, 4, 7, 3],type: "line"},
        "bar":{"name": "Some data", "data": [1, 2, 4, 7, 3],type: "bar"},
        "pie":{
            name: "My Super Column",
            data:[
                {value:2, name:'直接访问'},
                {value:3, name:'邮件营销'},
                {value:4, name:'联盟广告'},
                {value:3, name:'视频广告'},
                {value:2, name:'搜索引擎'}
            ], type: "pie","radius":"40%","center":['75%', '30%']}
    };

    //默认Series配置
    $scope.chartSeries = [
        {"name": "数据1", "data": [1, 2, 4, 7, 3],type: "bar"},
        {"name": "数据2", "data": [3, 1, 2, 5, 2],type: "bar"},
        {"name": "数据3", "data": [4, 2, 2, 3, 5], type: "bar"},
        {"name": "数据4", "data": [5, 6, 3, 2, 1], type: "bar"}
        /*{
         name: "数据4",
         data:[
         {value:2, name:'直接访问'},
         {value:3, name:'邮件营销'},
         {value:4, name:'联盟广告'},
         {value:3, name:'视频广告'},
         {value:2, name:'搜索引擎'}
         ], type: "pie","radius":"40%","center":['75%', '30%']}*/
    ];

    $scope.chartConfig = {};

    $scope.chartConfig ={
        title : {
            text: '大连经分图表生成系统测试版',
            subtext:'大连经分图表生成系统测试版副标题'
        },
        xAxis : [
            {
                type : 'category',
                data : ['1月','2月','3月','4月','5月']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        legend: {
            data:['数据1','数据2','数据3','数据4']
        },
        series : $scope.chartSeries
    };

    $scope.typeVal = "bar";

    $scope.typeChanged = function (obj,index) {
        //console.log(obj);
        if(obj == "bar"){
            $scope.chartConfig = null;
            $scope.chartConfig ={
                title : {
                    text: '大连经分图表生成系统测试版-柱状图',
                    subtext:'大连经分图表生成系统测试版副标题',
                    x: "center"
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                legend: {
                    x : 'center',
                    y:'bottom',
                    data:['数据1','数据2','数据3','数据4']
                },
                series : $scope.chartSeries
            };
        }else if(obj == "line"){
            $scope.chartConfig = null;
            $scope.chartConfig ={
                title : {
                    text: '大连经分图表生成系统测试版-线图',
                    subtext:'大连经分图表生成系统测试版副标题',
                    x: "center"
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                legend: {
                    data:['数据1','数据2','数据3','数据4'],
                    x : 'center',
                    y:'bottom'
                },
                series : [
                    {"name": "数据1", "data": [1, 2, 4, 7, 3],type: "line"},
                    {"name": "数据2", "data": [3, 1, 2, 5, 2],type: "line"},
                    {"name": "数据3", "data": [4, 2, 2, 3, 5], type: "line"},
                    {"name": "数据4", "data": [5, 6, 3, 2, 1], type: "line"}
                ]
            };
        }else if(obj == "lineArea"){
            $scope.chartConfig = null;
            $scope.chartConfig ={
                title : {
                    text: '大连经分图表生成系统测试版-面积图',
                    subtext:'大连经分图表生成系统测试版副标题',
                    x: "center"
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['1月','2月','3月','4月','5月']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                legend: {
                    data:['数据1','数据2','数据3','数据4'],
                    x : 'center',
                    y:'bottom'
                },
                series : [
                    {"name": "数据1", "data": [1, 2, 4, 7, 3],type: "line", smooth:true, itemStyle: {normal: {areaStyle: {type: 'default'}}}},
                    {"name": "数据2", "data": [3, 1, 2, 5, 2],type: "line", smooth:true, itemStyle: {normal: {areaStyle: {type: 'default'}}}},
                    {"name": "数据3", "data": [4, 2, 2, 3, 5], type: "line", smooth:true, itemStyle: {normal: {areaStyle: {type: 'default'}}}},
                    {"name": "数据4", "data": [5, 6, 3, 2, 1], type: "line", smooth:true, itemStyle: {normal: {areaStyle: {type: 'default'}}}}
                ]
            };
        }else{
            $scope.chartConfig ={
                title : {
                    text: '大连经分图表生成系统测试版-饼图',
                    subtext:'大连经分图表生成系统测试版副标题',
                    x: "center"
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    x : 'center',
                    y:'bottom',
                    data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                },
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : '55%',
                        center: ['50%', '60%'],
                        data:[
                            {value:2, name:'直接访问'},
                            {value:3, name:'邮件营销'},
                            {value:3, name:'联盟广告'},
                            {value:1, name:'视频广告'},
                            {value:6, name:'搜索引擎'}
                        ]
                    }
                ]
            };
        }
        //myChart.setOption($scope.chartConfig);
    };


    $scope.chartConfigPaste = "";

    //获取图表对象
    var myChart = echarts.init(document.getElementById('echartDemo-chart'));

    //监听图表配置
    $scope.$watch("chartConfig",function (newValue, oldValue) {
        // console.log(newValue);
        myChart.clear();
        myChart.setOption(newValue);

    },true);

    $scope.$watch("chartConfigPaste",function (newValue, oldValue) {
        if(newValue){
            var options;
            try {
                options = JSON.parse(newValue);
                if(options){
                    $scope.chartConfig = options;
                    myChart.setOption(options);
                }
            }catch (e) {
                swal("Json格式错误，请仔细检查!");
            }
        }
    },true);



});


