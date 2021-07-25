

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('SW registered: ', registration);
        }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });
}

// if ('serviceWorker' in navigator) {
//     $('#isSupport').text('支持');

//     // 开始注册service workers
//     navigator.serviceWorker.register('./sw-demo-cache.js', {
//         scope: './'
//     }).then(function (registration) {
//         $('#isSuccess').text('注册成功');

//         var serviceWorker;
//         if (registration.installing) {
//             serviceWorker = registration.installing;
//             $('#state').text('installing');
//         } else if (registration.waiting) {
//             serviceWorker = registration.waiting;
//             $('#state').text('waiting');
//         } else if (registration.active) {
//             serviceWorker = registration.active;
//             $('#state').text('active');
//         }
//         if (serviceWorker) {
//             $('#swState').text(serviceWorker.state);
//             serviceWorker.addEventListener('statechange', function (e) {
//                 $('#swState').append('&emsp;状态变化为'  e.target.state);
//             });
//         }
//     }).catch(function (error) {
//         $('#isSuccess').text('注册没有成功');
//     });
// } else {
//     $('#isSupport').text('不支持');
// }