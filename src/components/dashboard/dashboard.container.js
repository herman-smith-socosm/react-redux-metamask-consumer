import { connect } from 'react-redux';
import Dashboard from './dashboard.component';
import { addOutputLine, clearOutputs } from '../../actions'

const mapStateToProps = state => {
  return {
    outputLines: state.outputLines
  };
};

const mapDispatchToProps = dispatch => (
  {
    addOutputLine: (line) => dispatch(addOutputLine(line)),
    clearOutputs: () => dispatch(clearOutputs())
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
