import React from 'react';
import { connect } from 'react-redux';


export class soundBars extends React.Component {

    render() {
        const { item } = this.props;
        
        if(item.length===0 || item[0]==undefined){
            return <span>Loading...</span>
        }
        return (
            <div>
                <span>{item.map((itemSummary)=>itemSummary.modelName)}</span>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.apiReducer.items, loading: state.loading, error: state.error
});
export default connect(mapStateToProps)(soundBars);