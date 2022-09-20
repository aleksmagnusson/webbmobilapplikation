import PropTypes from "prop-types";

function SimplePropComponent({ name, age }) {
    return `Hello my name is ${name} and I am ${age} years old.`
}

SimplePropComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
}

export default SimplePropComponent