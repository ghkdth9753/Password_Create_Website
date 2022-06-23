function ShowSliderValue(sVal){	
    var obValueView = document.getElementById("slider_value_view");	
    obValueView.innerHTML = sVal}var RangeSlider = function(){	
        var range = $('.slider_range');	
        range.on('input', function(){				
            ShowSliderValue(this.value);	
        });};RangeSlider();
