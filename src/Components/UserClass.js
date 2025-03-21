import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // what is super props ?

    this.state = {
      count: 0,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child Component Did Mount");
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    // this is how we get props from parent
    return (
      <div className="user-card">
        <h3>Name :{name} (class based)</h3>

        <p>{count}</p>

        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          {" "}
          Counter : Increment
        </button>
      </div>
    );
  }
}

export default UserClass;
