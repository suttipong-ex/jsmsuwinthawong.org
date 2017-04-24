/**
 * @author jittagornp <http://jittagornp.me>
 * create : 2016/12/08
 */
app.run(function () {
  if (window.patentdesign && window.patentdesign.config && window.patentdesign.config.enabledConsoleWarning) {
    console.log("%cคำเตือน!", "background-color : yellow; color : red; font-size : 18pt;");
    console.warn("%cอย่าเอาโค๊ด (code) ใด ๆ ที่คุณไม่เข้าใจมาวางในคอลโซล (console) นี้  ถ้าไม่อยากถูกแฮ็ค (hack)", 'font-size : 12pt;');
    console.warn("%cคอนโซลนี้มีไว้สำหรับนักพัฒนา (โปรแกรมเมอร์) เท่านั้น! ถ้าใครบอกให้ทำอะไรตรงคอลโซลนี้ ให้สันนิษฐานก่อนว่าคุณกำลังโดนหลอก", 'font-size : 12pt;');
  }
});