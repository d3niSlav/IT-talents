/* SET GRAVITY RULES */
var gravity = new Vector(0, 9.81);
var friction = 0.85;

var world = {
    x1: 0,
    y1: 0,
    y2: window.innerHeight,
    x2: window.innerWidth,
};

window.onresize = function(event) {
    world.x2 = window.innerWidth;
    world.y2 = window.innerHeight;
};

/* CREATE THE BALL OBJECT */
function Ball() {
    this.position = new Point(200, 200);
    this.velocity = new Vector(-5, 0);
}

Ball.prototype = {
    remove: function() {
        this.output.remove();
    },
    move: function() {
        if (this.output.style.display == "none") {
            return;
        }

        this.velocity = this.velocity.add(gravity.scale(0.1));
        if (this.position.y > world.y2) {
            this.velocity.x2 = -this.velocity.x2 * friction;
            this.position.y = world.y2;
        } else if (this.position.y < world.y1) {
            this.velocity.x2 = -this.velocity.x2 * friction;
            this.position.y = world.y1;
        }

        if (this.position.x < world.x1 || this.position.x > world.x2) {
            this.output.style.display = "none";
        }

        this.position.x += this.velocity.x1;
        this.position.y += this.velocity.x2;

        this.output.style.left = this.position.x + "px";
        this.output.style.top = this.position.y + "px";
    }
};

/* ADD BALLS WITH EVENTS TO THE HTML FORM */
var balls = [];

setInterval(function() {
    balls.forEach(function(ball) {
        ball.move();
    });
}, 25);

var leftPossition = 25;
var topPossition = 0;
var count = 1;
var totalBalls = 47; //129
var ballsPerRow = 25;
var row = 1;

while (totalBalls > 0) {
    addBalls()
    count++;
    totalBalls--;
}

function addBalls() {
    var newBall = document.createElement("img");
    newBall.src = "assets/images/ball.png";
    newBall.style.top = topPossition + "px";
    newBall.style.left = leftPossition + "px";
    document.getElementById("balls-container").appendChild(newBall);

    var start;
    newBall.addEventListener("mouseenter", function(event) {
        start = new Point(event.pageX, event.pageY);
    });

    newBall.addEventListener("mouseleave", function(event) {
        var end = new Point(event.pageX, event.pageY);
        var ball = new Ball();
        ball.output = newBall;
        ball.position = end;
        ball.velocity = start.relative(end).scale(0.2);
        ball.move();
        balls.push(ball);
    });

    if (count == ballsPerRow - row) {
        topPossition += 55;
        leftPossition = 25 + ballsPerRow * row++;
        count = 0;
        return;
    }

    leftPossition += 55;
}

/* RESET BALLS POSITIONS */
document.addEventListener("keyup", function(event) {
    if (event.keyCode === 27) {
        balls.splice(0, balls.length);

        var newBalls = document.getElementsByTagName("img");

        leftPossition = 25;
        topPossition = 0;
        count = 1;
        row = 1;

        for (var index = 0; index < newBalls.length; index++) {
            newBalls[index].style.display = "block";
            newBalls[index].style.top = topPossition + "px";
            newBalls[index].style.left = leftPossition + "px";

            if (count++ == ballsPerRow - row) {
                topPossition += 55;
                leftPossition = 25 + ballsPerRow * row++;
                count = 0;
                continue;
            }

            leftPossition += 55;
        }
    }
});