import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import appConf from '../utils/metamodels/config.json';
import '../css/styles.css';

export class soundBars extends React.Component {

    render() {
        const { item } = this.props;
       
        if (item.length === 0 || item[0] === undefined) {
            return <span>Loading...</span>
        }
        return (
            <div>
                <ReactTable data={item} columns={[
                    {
                        Header: "SoundBars",
                        columns: [
                            {     
                                id: "imgSrc",                           
                                Cell: ()=><img src ={appConf.config.publicUrl + item[0].imgSrc} alt={item.modelName} class="thumbnail"/>
                            },
                            {
                                Header:"Product Name",
                                accessor: "modelName"
                                
                            },
                            {
                                Header:"Price",
                                accessor : "price"
                            }
                        ]

                    }]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                    ></ReactTable>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    item: state.apiReducer.items, loading: state.loading, error: state.error
});
export default connect(mapStateToProps)(soundBars);