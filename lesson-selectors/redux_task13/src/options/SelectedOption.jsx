import Options from './Options.jsx';
import { connect } from 'react-redux';
import { optionToggle } from './options.actions';
import { selectedOptions } from './options.selectors';

const mapState = (state) => {
	return { title: 'Selected options', options: selectedOptions(state) };
};

const mapDispatch = {
	optionToggle,
};

export default connect(mapState, mapDispatch)(Options);
