import React, {Component,Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            list: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDel = this.handleItemDel.bind(this)
    }
    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputNode">请输入：</label>
                    <input type="text"
                           id='inputNode'
                           className="input"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
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
        // 最早的写法
        // this.setState({
        //     inputValue: e.target.value
        // })
        /**
         * 新的写法
         */
        const value = e.target.value
        this.setState(()=>{
            return {
                inputValue: value
            }
        })
        /**
         * 上面的写法还可以这样写
         */
        this.setState(() => ({
            inputValue: value
        }))
    }

    handleBtnClick(){
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
        /**
         * 上面的写法可以这样写
         */
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue]
        }))
    }
    handleItemDel(index){
        // 不能直接改state里的内容，拷贝一份修改，然后通过setState修改
        // const list = [...this.state.list]
        // list.splice(index,1)
        // this.setState({
        //     list: list
        // })

        /**
         * 上面的写法可以这样写
         */
        this.setState((prevState) => {
            const list = [...prevState.list]
            list.splice(index, 1)
            return {
                list
            }
        })
    }

}
export default TodoList