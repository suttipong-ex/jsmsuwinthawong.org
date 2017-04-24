/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2017/01/12
 */
app.config([
    'NotificationProvider',
    function (NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 40,
            startRight: 30,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'bottom'
        });
    }
]);