    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create map instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_india2019High;

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    //Set min/max fill color for each area
    polygonSeries.heatRules.push({
    property: "fill",
    target: polygonSeries.mapPolygons.template,
    min: chart.colors.getIndex(0).brighten(1),  
    min: chart.colors.getIndex(1).brighten(0.3),
    // logarithmic: true
    // "min": am4core.color("#ffd7b1"), 
    });

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Set heatmap values for each state
    polygonSeries.data = [
    {
        id: "IN-JK",
        value: 10
    },
    {
        id: "IN-MH",
        value: 12
    },
    {
        id: "IN-UP",
        value: 10
    },
    {
        id: "US-AR",
        value: 13
    },
    {
        id: "IN-RJ",
        value: 30
    },
    {
        id: "IN-AP",
        value: 40
    },
    {
        id: "IN-MP",
        value: 90
    },
    {
        id: "IN-TN",
        value: 40
    },
    {
        id: "IN-JH",
        value: 3
    },
    {
        id: "IN-WB",
        value: 0
    },
    {
        id: "IN-GJ",
        value: 0
    },
    {
        id: "IN-BR",
        value: 0
    },
    {
        id: "IN-TG",
        value: 0
    },
    {
        id: "IN-GA",
        value: 0
    },
    {
        id: "IN-DN",
        value: 0
    },
    {
        id: "IN-DL",
        value: 0
    },
    {
        id: "IN-DD",
        value: 0
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
        value: 0
    },
    {
        id: "IN-AR",
        value: 0
    },
    {
        id: "IN-AN",
        value: 0
    },
    {
        id: "IN-KA",
        value: 0
    },
    {
        id: "IN-KL",
        value: 0
    },
    {
        id: "IN-OR",
        value: 0
    },
    {
        id: "IN-SK",
        value: 0
    },
    {
        id: "IN-HP",
        value:15
    },
    {
        id: "IN-PB",
        value: 14
    },
    {
        id: "IN-HR",
        value: 13
    },
    {
        id: "IN-UT",
        value: 12
    },
    {
        id: "IN-LK",
        value: 12
    },
    {
        id: "IN-MN",
        value: 5
    },
    {
        id: "IN-TR",
        value: 4
    },
    {
        id: "IN-MZ",
        value: 3
    },
    {
        id: "IN-NL",
        value: 2
    },
    {
        id: "IN-ML",
        value: 1
    }
    ];

    function handleStateClick(event) {
        var stateId = event.target.dataItem.dataContext.id;
    
        // Create the pop-up content with clickable links
        var popupContent = document.createElement('div');
        popupContent.innerHTML = `
            ${stateId} Information:
            - <a href="/statePage/${stateId}" class="state-link" data-state="${stateId}">Cuisine</a>
            - <a href="/statePage/${stateId}" class="state-link" data-state="${stateId}">Art</a>
            - <a href="/statePage/${stateId}" class="state-link" data-state="${stateId}">Music</a>
        `;
        
    
        // Add click event listeners to the links
        var links = popupContent.getElementsByClassName('state-link');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior
    
                // Get the state and link information from the clicked link
                var stateId = event.target.getAttribute('data-state');
                var linkHref = event.target.getAttribute('href');
    
                // Update the URL with the state information
                window.location.href = linkHref + '?state=' + stateId;
            });
        }
    
        // Create a custom modal for displaying the pop-up content
        var modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = popupContent.outerHTML;
    
        // Append the modal to the document
        document.body.appendChild(modal);
    
        // Use CSS to style the modal (you can define a CSS class for this)
        // For example:
        // .modal {
        //   display: none;
        //   position: fixed;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   background-color: rgba(0, 0, 0, 0.5);
        //   z-index: 9999;
        //   display: flex;
        //   align-items: center;
        //   justify-content: center;
        // }
    
        // Show the modal
        modal.style.display = 'block';
    }
    
      
      

    // Configure series tooltip
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}: {value}";
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#ff7d01");

    polygonTemplate.events.on("hit", handleStateClick);

