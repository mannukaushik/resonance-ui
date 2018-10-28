import React from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import "react-table/react-table.css";
import appConf from '../utils/metamodels/config.json';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import loading from '../images/loading.gif';

export class soundBars extends React.Component {

    render() {
        const { item } = this.props;
       
        if (item.length === 0 || item[0] === undefined) {
            return <span class="container"><img src={loading} class= "text-center img-responsive margin-loading img-fluid"/></span>
        }
        return (
            <div class = "container">
                <ReactTable data={item} columns={[
                    {
                        Header: "Sound Bars",
                        headerClassName:"headers page-header table",
                        className: "table",
                        columns: [
                            {     
                                id: "imgSrc",
                                accessor:"imgSrc",                                       
                                Cell: (props)=><img src ={appConf.config.publicUrl + props.original.imgSrc} alt={props.original.modelName} class="img-thumbnail img-fluid"/>
                            },
                            {
                                Header:"Product Name",
                                accessor: "modelName",
                                headerClassName:"in-headers page-header",
                                className:"text-center margin-top"
                               
                                
                            },
                            {
                                Header:"Price",
                                accessor : "price",
                                headerClassName:"in-headers page-header",
                                className:"text-center margin-top",
                                Cell:(props)=><div>{'Rs '+props.original.price +'/-'}</div>
                            }
                        ]

                    }]}
                    defaultPageSize={5}
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