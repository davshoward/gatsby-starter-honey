import React, { Component } from "react";
import PropTypes from "prop-types";

import { ReactComponent as Logo } from "../svg/logo.svg";

class Icon extends Component {
	components = {
		logo: Logo,
	};

	render() {
		const IconName = this.components[this.props.name];

		return <IconName className={`icon icon-${this.props.name}`} />;
	}
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Icon;
