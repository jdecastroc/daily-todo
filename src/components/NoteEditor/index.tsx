import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import {
  Container,
} from './styles';
import {INoteEditorState} from '../../common/types';
import { SubmitButtonContainer } from "../ActivityComponents/MyDay/SummaryForm/styles";


export default class NoteEditor extends React.Component<{}, INoteEditorState> {
  constructor (props:any) {
    super(props);
    this.state = {
      value: "**Hello world!!!**",
      tab: "write"
    };
    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true,
      strikethrough: true,
      tasklists: true
    });
  }

  handleValueChange = (value:any) => {
    this.setState({ value });
  };

  handleTabChange = (tab: "write" | "preview") => {
    this.setState({tab})
};

  render () {
    return (
      <Container>
        <h1>Notes</h1>
        <div className="container">
          <ReactMde
            onChange={this.handleValueChange}
            onTabChange={this.handleTabChange}
            value={this.state.value}
            generateMarkdownPreview={markdown =>
              Promise.resolve(this.converter.makeHtml(markdown))
            }
            selectedTab={this.state.tab}
          />
        </div>
        <SubmitButtonContainer>
          <button>Save Notes</button>
        </SubmitButtonContainer>
      </Container>
    );
  }
}