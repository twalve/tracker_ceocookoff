(function(){
  var ZHRVST = {
    PROGRESS: 0,
    RAISED: 0,
    TARGET: 2000000,
    delay: function() {
      setTimeout(ZHRVST.progress, 250);
    },
    fetch: function() {
      this.RAISED = 757033;// this would be fetched dynamically
      this.PROGRESS = this.RAISED / this.TARGET * 100;// percentage
    },
    progress: function (update) {
      var progress = "width:" + ZHRVST.PROGRESS + "%;";

      document.querySelector("#progress-track").classList.add("progress");

      var sheet = document.createElement("style");
      var styles = '#progress #progress-track.progress {' + progress + '}';
      if (sheet.styleSheet) sheet.styleSheet.cssText = styles;
      else sheet.appendChild(document.createTextNode(styles));

      document.querySelector("head").appendChild(sheet);
    },
    update: function() {
      var progress = "Current progress: $" + this.RAISED;
      document.querySelector("#progress-truck").setAttribute("alt", progress);
    },
    init: function () {
      this.fetch();
      this.delay();
      this.update();
    }
  };

  window.ZHRVST = ZHRVST;
  ZHRVST.init();
}());
