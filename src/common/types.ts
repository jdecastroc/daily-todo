import { MdePreview } from "react-mde/lib/definitions/components";

/**
 * Its Types (e.g. enums) + constants :)
 */

export interface ObjectIndexer<T> {
  [id: string]: T;
}

 // Style-component Interface
export interface IStyledComponentsTagsProps {
  styleTags: any
}

/**
 * Reusable components related types
 */
export interface IEmojiProps {
  label?: string,
  symbol: string,
}

/**
 * User information types
 */

interface IActivityList {
  name: string,
  component: string,
  icon: string,
}

export interface IUserInformation {
  id: number,
  username: string,
  name: string,
  avatar: string,
  lists: Array<IActivityList>,
}

/**
 * Menu related types
 */

export const defaultSelectedList = 'MyDay';

export interface ISideMenuProps {
  userInformation: IUserInformation;
  selectedList: string;
  onChangeList: Function, 
};

export interface ISideMenuListProps {
  name: string,
  emoji: React.ReactElement,
  component: string,
  onClick: Function,
}

export interface ISideMenuUserProps {
  avatar: string,
  username: string,
}

/**
 * Activity Page Types
 */

export interface IColumnLayout {
  firstBlockComponent: React.ReactElement,
  secondBlockComponent: React.ReactElement,
  otherStatsComponent?: React.ReactElement,
}

export interface IActivityBox {
  title?: string,
  children?: any,
}

/**
 * Note editor related interfaces
 */

export interface INoteEditorState {
  value: string,
  tab: 'write' | 'preview',
}

/**
 * Form interfaces
 */

export interface IFormBlockProps {
  title: string,
  children?: React.ReactElement | Array<React.ReactElement>,
  direction: string,
  notes: string,
}

export interface ISummaryFormValues extends ObjectIndexer<string | any> {
  objective: string,
  oportunities: Array<string>,
  gratitudeList: Array<string>,
  clearGoalsCheck: Boolean,
  meaningfulProgressCheck: Boolean,
  improveRelationshipsCheck: Boolean,
  foundEnthusiasmCheck: Boolean,
  happyScore: number,
  isSubmitting: Boolean,
}

export interface IInputArrayStringsProps {
  defaultStrings: Array<string>,
  maxLength: number,
  strings: Array<string>,
  handleChange: Function,
}

export interface ICheckBoxProps {
  isLoading: Boolean,
  identifier: string,
  handleChange: Function,
  value: Boolean,
}

export interface INumberBoxProps {
  onChange: Function,
  initialValue: number,
  maxValue: number,
  minValue: number,
}