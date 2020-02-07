import React from "react";
import theme from "../../../styles/theme"
import * as contentActions from "../../../redux/actions/contentActions";
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import { connect } from "react-redux";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           content:"Hello",
        }
    }
    componentDidMount(){
        this.props.getDummyData();
    }

    static getDerivedStateFromProps(nextProp, prevState) {
        return {
            content : nextProp.content !== prevState.content ? nextProp.content : prevState.content,
        }
    }
    render(){

        return (

           <View style={{flex:1}}>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:22,color:'black',fontWeight:'bold',textAlign:'center'}}>{"Welcome to Home Component.\nA creavite initiative by Premangshu Howli"}</Text>
                    <TouchableOpacity
                        onPress={()=>{
                            if(this.state.content){
                                alert(JSON.stringify(this.state.content));
                            }

                        }}
                        style={{minHeight:50,
                        minWidth:200,
                        justifyContent:'center',
                        borderRadius:10,
                        backgroundColor:theme.colors.primary}}>
                        <Text style={{fontSize:22,
                            color:'black',
                            fontWeight:'bold',
                            textAlign:'center'}}>{"Check Response"}</Text>
                    </TouchableOpacity>
                </View>
           </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        content:state.contentReducer.allContent,
    };
};


const mapDispatchToProps = (dispatch) => {

    return {
        getDummyData:()=>{
            console.log("DP called");
            contentActions.getAllContent(dispatch);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

