import { MdePreview } from "react-mde/lib/definitions/components";

/**
 * Its Types (e.g. enums) + constants :)
 */

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