function essen() {
    document.getElementById("title").innerText = "Speisekarte";
    document.getElementById("banner").style = "background-color: #CC231E";
    window.scrollTo(0,0); 
    document.getElementById("maintext").innerHTML = "<h1>Vorspeise:</h1>Fruchtige Tomatensuppe<br>mit Croutons<br>und Sahnehäubchen<br><br><h1>Hauptgericht:</h1>Weihnachtlicher Gulasch<br>vom Schwein mit Spätzle,<br>Rotkraut und hausgemachten Knödeln<br><h2>Vegetarisch:</h2>Getrüffeltes Waldpilz-Rahmragout<br><br><h1>Dessert:</h1>Winterliches Tiramisu<br>"
}
function show() {
    document.getElementById("title").innerText = "Programmkarte";
    document.getElementById("banner").style = "background-color: #0F8A5F";
    window.scrollTo(0,0); 
    document.getElementById("maintext").innerHTML = "<h1>Begrüßungsrede</h1>Gedicht (Kilian)<br>Klavier (Pia)<br>1. Satz Theaterspiel<br><br><h1>Vorspeise</h1>2. Satz Theaterspiel<br>Klavier (Zirun)<br>Looking out for you / Joy again <br>(Luis, Richard, Zirun, Hendrik)<br>Tradition (Anton, Giulia, Leonie)<br>Gedicht (Connar, Justus)<br><br><h1>Hauptgang</h1>3. Satz Theaterspiel<br>Fächertanz (Jing)<br>Jonglieren (Tasja)<br>Gedicht (Yixuan, Junhong)<br>DJ Auftritt (Marcel)<br><br><h1>Nachspeise</h1>Wer weiß denn sowas? Merz Spezial!<br>4. Satz Theaterspiel<br>Klavier (Zirun, Pia)<br>Gedicht (Anton)<br>Wichteln <br>(Weihnachtsmann, Knecht Ruprecht)<br>Abmoderation<br>Diashow<br>";

}
(function () {

    var COUNT = 300;
    var masthead = document.querySelector('.sky');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = masthead.clientWidth;
    var height = masthead.clientHeight;
    var i = 0;
    var active = false;
  
    function onResize() {
      width = masthead.clientWidth;
      height = masthead.clientHeight;
      canvas.width = width;
      canvas.height = height;
      ctx.fillStyle = '#FFF';
  
      var wasActive = active;
      active = width > 200;
  
      if (!wasActive && active)
        requestAnimFrame(update);
    }
  
    var Snowflake = function () {
      this.x = 0;
      this.y = 0;
      this.vy = 0;
      this.vx = 0;
      this.r = 0;
  
      this.reset();
    }
  
    Snowflake.prototype.reset = function() {
      this.x = Math.random() * width;
      this.y = Math.random() * -height;
      this.vy = 1 + Math.random() * 3;
      this.vx = 0.5 - Math.random();
      this.r = 1 + Math.random() * 2;
      this.o = 0.5 + Math.random() * 0.5;
    }
  
    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';
  
    var snowflakes = [], snowflake;
    for (i = 0; i < COUNT; i++) {
      snowflake = new Snowflake();
      snowflake.reset();
      snowflakes.push(snowflake);
    }
  
    function update() {
  
      ctx.clearRect(0, 0, width, height);
  
      if (!active)
        return;
  
      for (i = 0; i < COUNT; i++) {
        snowflake = snowflakes[i];
        snowflake.y += snowflake.vy;
        snowflake.x += snowflake.vx;
  
        ctx.globalAlpha = snowflake.o;
        ctx.beginPath();
        ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
  
        if (snowflake.y > height) {
          snowflake.reset();
        }
      }
  
      requestAnimFrame(update);
    }
  
    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  
    onResize();
    window.addEventListener('resize', onResize, false);
  
    masthead.appendChild(canvas);
  })();