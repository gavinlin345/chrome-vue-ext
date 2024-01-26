// top level await is available in ES modules loaded from script tags
const [tab] = await chrome.tabs.query({
  active: true,
  lastFocusedWindow: true
});

const tabId = tab.id;
const button = document.getElementById('openSidePanel');
button.addEventListener('click', async () => {
  console.log('notify click');
  chrome.notifications.create('customNotificationId', {
    type: 'basic',
    iconUrl: '32x32.png',
    title: 'My Extension',
    message: 'Hello, this is a notification!'
  }, function(notificationId) {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
    } else {
      console.log('Notification created with ID:', notificationId);
    }
  });
  // await chrome.sidePanel.open({ tabId });
  // await chrome.sidePanel.setOptions({
  //   tabId,
  //   path: 'sidepanel.html',
  //   enabled: true
  // });
});
