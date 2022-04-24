import Options from './Options.jsx';
import { connect } from 'react-redux';
import { optionToggle } from './options.actions';
import { availableOptions } from './options.selectors';

const mapState = (state) => {
	return { title: 'Available options', options: availableOptions(state) };
};

const mapDispatch = {
	optionToggle,
};

export default connect(mapState, mapDispatch)(Options);
