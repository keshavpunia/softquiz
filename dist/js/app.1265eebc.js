(function(e) {
  function t(t) {
    for (var r, i, u = t[0], c = t[1], a = t[2], f = 0, p = []; f < u.length; f++) i = u[f], Object.prototype.hasOwnProperty.call(s, i) && s[i] && p.push(s[i][0]), s[i] = 0;
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    l && l(t);
    while (p.length) p.shift()();
    return o.push.apply(o, a || []), n()
  }

  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], r = !0, u = 1; u < n.length; u++) {
        var c = n[u];
        0 !== s[c] && (r = !1)
      }
      r && (o.splice(t--, 1), e = i(i.s = n[0]))
    }
    return e
  }
  var r = {},
    s = {
      app: 0
    },
    o = [];

  function i(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
  }
  i.m = e, i.c = r, i.d = function(e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    })
  }, i.r = function(e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, i.t = function(e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var r in e) i.d(n, r, function(t) {
        return e[t]
      }.bind(null, r));
    return n
  }, i.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e["default"]
    } : function() {
      return e
    };
    return i.d(t, "a", t), t
  }, i.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, i.p = "/";
  var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
    c = u.push.bind(u);
  u.push = t, u = u.slice();
  for (var a = 0; a < u.length; a++) t(u[a]);
  var l = c;
  o.push([0, "chunk-vendors"]), n()
})({
  0: function(e, t, n) {
    e.exports = n("56d7")
  },
  "034f": function(e, t, n) {
    "use strict";
    n("85ec")
  },
  "48cb": function(e, t, n) {
    "use strict";
    n("5aca")
  },
  "56d7": function(e, t, n) {
    "use strict";
    n.r(t);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = n("2b0e"),
      s = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", {
          attrs: {
            id: "app"
          }
        }, [n("div", {
          attrs: {
            id: "quiz"
          }
        }, [e.introStage ? n("div", [n("h1", [e._v("Welcome to the Quiz: " + e._s(e.title))]), n("p", [e._v(" Press start to begin . ")]), n("button", {
          on: {
            click: e.startQuiz
          }
        }, [e._v("START!")])]) : e._e(), e.loader ? n("div", [n("h1", [e._v("Welcome to the Quiz: " + e._s(e.title))]), n("p", [e._v(" Loading... ")])]) : e._e(), e.questionStage ? n("div", [n("question", {
          attrs: {
            question: e.questions[e.currentQuestion],
            "question-number": e.currentQuestion + 1
          },
          on: {
            answer: e.handleAnswer
          }
        })], 1) : e._e(), e.resultsStage ? n("div", [e._v(" You got " + e._s(e.correct) + " right out of " + e._s(e.questions.length) + " questions. Your percentage is " + e._s(e.perc) + "%. ")]) : e._e()])])
      },
      o = [],
      i = (n("d3b7"), n("159b"), n("b680"), function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", [n("strong", [e._v("Question " + e._s(e.questionNumber) + ":")]), n("br"), n("br"), n("strong", [e._v(" " + e._s(e.question.question) + " ")]), n("br"), n("br"), e._l(e.question.incorrect_answers, (function(t, r) {
          return n("div", {
            key: r
          }, [n("input", {
            directives: [{
              name: "model",
              rawName: "v-model",
              value: e.answer,
              expression: "answer"
            }],
            attrs: {
              type: "radio",
              id: "answer" + r,
              name: "currentQuestion"
            },
            domProps: {
              value: t,
              checked: e._q(e.answer, t)
            },
            on: {
              change: function(n) {
                e.answer = t
              }
            }
          }), n("label", {
            attrs: {
              for: "answer" + r
            }
          }, [e._v(e._s(t))]), n("br"), n("br")])
        })), n("button", {
          on: {
            click: e.submitAnswer
          }
        }, [e._v("Answer")])], 2)
      }),
      u = [],
      c = {
        name: "question",
        data: function() {
          return console.log(this.question.incorrect_answers), {
            answer: ""
          }
        },
        props: ["question", "question-number"],
        methods: {
          submitAnswer: function() {
            this.$emit("answer", {
              answer: this.answer
            }), this.answer = null
          }
        }
      },
      a = c,
      l = (n("48cb"), n("2877")),
      f = Object(l["a"])(a, i, u, !1, null, "0e305bd4", null),
      p = f.exports,
      h = "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple",
      d = {
        name: "App",
        components: {
          question: p
        },
        data: function() {
          return {
            loader: !0,
            introStage: !1,
            questionStage: !1,
            resultsStage: !1,
            title: "Entertainment",
            questions: [],
            currentQuestion: 0,
            answers: [],
            correct: 0,
            perc: null
          }
        },
        created: function() {
          var e = this;
          fetch(h).then((function(e) {
            return e.json()
          })).then((function(t) {
            e.questions = t.results, e.questions.forEach((function(e) {
              e.incorrect_answers.push(e.correct_answer)
            })), e.introStage = !0, e.loader = !1
          }))
        },
        methods: {
          startQuiz: function() {
            this.introStage = !1, this.questionStage = !0, console.log("test" + JSON.stringify(this.questions[this.currentQuestion]))
          },
          handleAnswer: function(e) {
            console.log("answer event ftw", e), this.answers[this.currentQuestion] = e.answer, this.currentQuestion + 1 === this.questions.length ? (this.handleResults(), this.questionStage = !1, this.resultsStage = !0) : this.currentQuestion++
          },
          handleResults: function() {
            var e = this;
            console.log("handle results"), this.questions.forEach((function(t, n) {
              e.answers[n] === t.correct_answer && e.correct++
            })), this.perc = (this.correct / this.questions.length * 100).toFixed(2), console.log(this.correct + " " + this.perc)
          }
        }
      },
      v = d,
      b = (n("034f"), Object(l["a"])(v, s, o, !1, null, null, null)),
      g = b.exports;
    r["a"].config.productionTip = !1, new r["a"]({
      render: function(e) {
        return e(g)
      }
    }).$mount("#app")
  },
  "5aca": function(e, t, n) {},
  "85ec": function(e, t, n) {}
});
//# sourceMappingURL=app.1265eebc.js.map
