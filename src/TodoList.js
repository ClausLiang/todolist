import React, {Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import {Input,Button} from 'antd'
import 'antd/dist/antd.css'
import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './store/actionTypes'

import store from './store'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = store.getState()
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDel = this.handleItemDel.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)
    }
    render(){
        return (
            <Fragment>
                <div style={{marginLeft: '10px', marginTop: '10px'}}>
                    <label htmlFor="inputNode">请输入：</label>
                    <Input type="text"
                           id='inputNode'
                           className="input"
                           style={{width: '300px'}}
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <Button type='primary' style={{marginLeft: '10px'}} onClick={this.handleBtnClick}>提交</Button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) =>{
                            return (
                                <Fragment key={index}>
                                    <TodoItem content={item}
                                              index={index}
                                              deleteItem={this.handleItemDel}
                                    />
                                    {/*<li
                                        key={index}
                                        onClick={this.handleItemDel.bind(this, index)}
                                        dangerouslySetInnerHTML={{__html: item}}
                                    >

                                    </li>*/}
                                </Fragment>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        }
        store.dispatch(action)
    }

    handleStoreChange(){
        this.setState(store.getState())
    }
    handleBtnClick(){
        const action = {
            type: ADD_TODO_ITEM,
            value: ''
        }
        store.dispatch(action)
    }
    handleItemDel(index){
        const action = {
            type: DELETE_TODO_ITEM,
            value: index
        }
        store.dispatch(action)
    }

}
export default TodoList
