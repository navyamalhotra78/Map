// here theme begins
am4core.useTheme(am4themes_animated);
// Themes end here

// creating map instance
let chart = am4core.create("chartdiv", am4maps.MapChart);

// setting definition of map
chart.geodata = am4geodata_india2019High;

// this is map polygon
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Set min/max fill color for each area
polygonSeries.heatRules.push({
  property: "fill",
  target: polygonSeries.mapPolygons.template,
  min: am4core.color("green"),
  max: am4core.color("orange"),
  dataField: "value"
});

// Make map load polygon data (state shapes and names) from GeoJSONx
polygonSeries.useGeodata = true;

// Set values for each state
polygonSeries.data = [
  {
    id: "IN-JK",
    value: 1,
    customValue: ""
  },
  {
    id: "IN-MH",
    value: 0,
    customValue: '1.Victorian Gothicand Art DecoEnsembles 2.Chhatrapati Shivaji Terminus 3.Ajanta and Ellora Caves'
  },
  {
    id: "IN-UP",
    value: 1,
  },
  {
    id: "US-AR",
    value: 1
  },
  {
    id: "IN-RJ",
    value: 1,
    customValue: '1. The Pink City 2. Hill Forts'
  },
  {
    id: "IN-AP",
    value: 0
  },
  {
    id: "IN-MP",
    value: 1,
    customValue: '1.Bhimbetka Rock Shelters 2.Monuments of Buddha'
  },
  {
    id: "IN-TN",
    value: 0,
    customValue: 'Great Living Chola Temples'
  },
  {
    id: "IN-JH",
    value: 0
  },
  {
    id: "IN-WB",
    value: 1,
    customValue: '1.Santiniketan	2.MountainRailways of Darjeeling,Kalka Shimla & Nilgiri 3.Sundarbans National Park'
  },
  {
    id: "IN-GJ",
    value: 1,
    customValue: '1. Dholavira 2.The Historic City 3.Rani Ki Vav(The Queen’s Stepwell)'
  },
  {
    id: "IN-BR",
    value: 1,
    customValue: '1.Nalanda 2.Mahabodhi Temple'
  },
  {
    id: "IN-TG",
    value: 0,
    customValue: 'KakatiyaRudreshwara(Ramappa)Temple'
  },
  {
    id: "IN-GA",
    value: 0,
    customValue: 'Churches and Convents of Goa'
  },
  {
    id: "IN-DN",
    value: 0
  },
  {
    id: "IN-DL",
    value: 1,
    customValue: '1.Red Fort 2.Jantar Mantar 3.Qutub Minar 4.Humayun’s Tomb 5.Fatehpur Sikri'
  },
  {
    id: "IN-DD",
    value: 1
  },
  {
    id: "IN-CH",
    value: 0
  },
  {
    id: "IN-CT",
    value: 0
  },
  {
    id: "IN-AS",
    value: 1,
    customValue: 'Manas Wildlife Sanctuary'
  },
  {
    id: "IN-AR",
    value: 1
  },
  {
    id: "IN-AN",
    value: 1
  },
  {
    id: "IN-KA",
    value: 0,
    customValue: "1.Hoysala temples of Belur, Halebid and Somananthpura 2.Pattadakal"
  },
  {
    id: "IN-KL",
    value: 0
  },
  {
    id: "IN-OR",
    value: 0,
    customValue: 'Sun Temple'
  },
  {
    id: "IN-SK",
    value: 1,
    customValue: 'Khangchendzonga National Park'
  },
  {
    id: "IN-HP",
    value: 0,
    value: 1,
    customValue: 'Great Himalayan National Park'
  },
  {
    id: "IN-PB",
    value: 1,
  },
  {
    id: "IN-HR",
    value: 1,
  },
  {
    id: "IN-UT",
    value: 1,
    customValue: 'Nanda Devi & Valley of Flowers National Park'

  },
  {
    id: "IN-LK",
    value: 1,

  },
  {
    id: "IN-MN",
    value: 1
  },
  {
    id: "IN-TR",
    value: 1
  },
  {
    id: "IN-MZ",
    value: 1
  },
  {
    id: "IN-NL",
    value: 1
  },
  {
    id: "IN-ML",
    value: 1
  }
];
    function handleStateClick(event) {
        var stateName = event.target.dataItem.dataContext.name;
        console.log(stateName);

        var linkHref = "/statePage/" + stateName;
        window.open(linkHref, '_blank');
    }
    
    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;  

    // Create hover state and set an alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("silver");

    polygonTemplate.events.on("hit", handleStateClick);

