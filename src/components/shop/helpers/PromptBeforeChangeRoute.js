class PromptBeforeChangeRoute extends React.Component{
    constructor(props) {
        super(props);

        this.state = {dirty: false}; // состояние формы - нет изменений
    }
    setDirty () { this.setState({dirty: true})};

    render() {
        return (
            <div>
                <h1>Form</h1>

                <input type='text' onInput={this.setDirty.bind(this)} />

                <Prompt
                    when={this.state.dirty}
                    message='Данные будут потеряны!' />
            </div>
        )
    }
}
export default PromptBeforeChangeRoute;