const rangeInput = document.querySelectorAll('.filter-delivery__range');
const progress = document.querySelector('.filter-delivery__progress');
const minValue = document.querySelector('.filter-delivery__min span');
const maxValue = document.querySelector('.filter-delivery__max span');

rangeInput.forEach(input => {
    input.addEventListener('input', e=>{
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if(maxVal - minVal < 0){
            if(e.target.className === 'filter-delivery__range min'){
                rangeInput[0].value = maxVal;
            } else{
                rangeInput[1].value = minVal;
            }
        } else{
            minValue.textContent = minVal;
            maxValue.textContent = maxVal;
            progress.computedStyleMap.left = (minVal / rangeInput[0].max) * 100 + '%';
            progress.computedStyleMap.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
        }
    });
});