function boxmania(selector) {

    var i,
        colsNo,
        boxNo;

    function getStateBack() {

        $('.moved').each(function () {
            $(this).removeClass('moved').removeAttr('style');
        });
    }

    function checkClickedCol() {
        var colIterator = 0;
        do {
            colIterator++;
            if ((boxNo - colIterator) % colsNo === 0) {
                return colIterator;
            }
        } while (colIterator <= 7);
    }

    function fillGaps() {
        var leftOffset = 0,
            topOffset = 0,
            clickedCol = checkClickedCol();

        i = 1;
        do {
            $('.block:nth-child(' + (boxNo + i) + ')').css({
                position: 'absolute',
                top: (topOffset * 260) + (Math.ceil(boxNo / colsNo) * 260),
                left: leftOffset * 260
            }).addClass('moved');
            leftOffset++;

            if (i % (clickedCol - 1) === 0) {
                leftOffset = 0;
                topOffset++;
            }
            i++;

        } while (i <= (clickedCol - 1) * 3);


    }

    function checkColNo() {
        colsNo = Math.floor(($(window).width() - 16) / 260);
        //setInterval(function () {
        //    colsNo = Math.floor(($(window).width() - 16) / 260);
        //    console.log(colsNo);
        //}, 1000);
    }

    $(selector + ' .block').click(function () {

        checkColNo();

        boxNo = $(this).data('no');

        if ($(this).hasClass('big')) {
            getStateBack();
            $(this).removeAttr('style').removeClass('big');
        } else {
            $(this).css({
                width: '510px',
                height: '1030px'
            }).addClass('big');
            fillGaps();
        }

    });

};