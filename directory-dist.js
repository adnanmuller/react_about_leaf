"use strict";

(function () {
  "use strict";

  function Filters(props) {
    var titles = window.LMDirectory.titles;
    return /*#__PURE__*/React.createElement("form", {
      action: "",
      id: "directory-filters"
    }, /*#__PURE__*/React.createElement("div", {
      className: "group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "txt-name"
    }, "Name:"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      value: "",
      placeholder: "Name of employee",
      id: "txt-name"
    })), /*#__PURE__*/React.createElement("div", {
      className: "group"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "sel-title"
    }, "Job Title:"), /*#__PURE__*/React.createElement("select", {
      name: "sel-title",
      id: "sel-title"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "- Select -"), titles.map(function (title) {
      return /*#__PURE__*/React.createElement("option", {
        value: title.key,
        key: title.key
      }, title.display);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "group"
    }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      value: "1"
    }), " Intern")));
  } //test


  function Person(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "person"
    }, /*#__PURE__*/React.createElement("h3", null, props.person.name, ", ", props.person.title), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("img", {
      className: " size-medium  alignright",
      src: props.person.img,
      alt: props.person.name,
      width: "300",
      height: "300",
      sizes: "(max-width: 300px) 100vw, 300px"
    }), props.person.bio));
  }

  function People(props) {
    return /*#__PURE__*/React.createElement("div", {
      className: "results"
    }, props.people.map(function (person) {
      return /*#__PURE__*/React.createElement(Person, {
        key: person.id,
        person: person
      });
    }));
  }

  class Directory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        people: window.LMDirectory.people
      };
    }

    render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "company-directory"
      }, /*#__PURE__*/React.createElement("h2", null, "Company Directory"), /*#__PURE__*/React.createElement("p", null, "Learn more about each person at Leaf & Mortar in this company directory."), /*#__PURE__*/React.createElement(Filters, null), /*#__PURE__*/React.createElement(People, {
        people: this.state.people
      }));
    }

  }

  ReactDOM.render( /*#__PURE__*/React.createElement(Directory, null), document.getElementById("directory-root"));
})();
//# sourceMappingURL=directory-dist.js.map