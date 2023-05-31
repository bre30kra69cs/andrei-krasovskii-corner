import {
  createElement,
  forwardRef,
  MouseEventHandler,
  DragEventHandler,
  FocusEventHandler,
  CSSProperties,
  ReactNode,
  AriaRole,
} from 'react';

import {cn} from '../../shared/cn';
import {flexB, FlexBem} from './Flex.bem';

export type FlexAs =
  | 'div'
  | 'main'
  | 'section'
  | 'footer'
  | 'header'
  | 'aside'
  | 'article'
  | 'li'
  | 'ul'
  | 'dialog'
  | 'nav';

export type FlexProps = FlexBem & {
  id?: string;
  as?: FlexAs;
  role?: AriaRole;
  draggable?: boolean;
  tabIndex?: number;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  onAuxClick?: MouseEventHandler<HTMLDivElement>;
  onAuxClickCapture?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onClickCapture?: MouseEventHandler<HTMLDivElement>;
  onContextMenu?: MouseEventHandler<HTMLDivElement>;
  onContextMenuCapture?: MouseEventHandler<HTMLDivElement>;
  onDoubleClick?: MouseEventHandler<HTMLDivElement>;
  onDoubleClickCapture?: MouseEventHandler<HTMLDivElement>;
  onDrag?: DragEventHandler<HTMLDivElement>;
  onDragCapture?: DragEventHandler<HTMLDivElement>;
  onDragEnd?: DragEventHandler<HTMLDivElement>;
  onDragEndCapture?: DragEventHandler<HTMLDivElement>;
  onDragEnter?: DragEventHandler<HTMLDivElement>;
  onDragEnterCapture?: DragEventHandler<HTMLDivElement>;
  onDragLeave?: DragEventHandler<HTMLDivElement>;
  onDragLeaveCapture?: DragEventHandler<HTMLDivElement>;
  onDragOver?: DragEventHandler<HTMLDivElement>;
  onDragOverCapture?: DragEventHandler<HTMLDivElement>;
  onDragStart?: DragEventHandler<HTMLDivElement>;
  onDragStartCapture?: DragEventHandler<HTMLDivElement>;
  onDrop?: DragEventHandler<HTMLDivElement>;
  onDropCapture?: DragEventHandler<HTMLDivElement>;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
  onMouseDownCapture?: MouseEventHandler<HTMLDivElement>;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: MouseEventHandler<HTMLDivElement>;
  onMouseMove?: MouseEventHandler<HTMLDivElement>;
  onMouseMoveCapture?: MouseEventHandler<HTMLDivElement>;
  onMouseOut?: MouseEventHandler<HTMLDivElement>;
  onMouseOutCapture?: MouseEventHandler<HTMLDivElement>;
  onMouseOver?: MouseEventHandler<HTMLDivElement>;
  onMouseOverCapture?: MouseEventHandler<HTMLDivElement>;
  onMouseUp?: MouseEventHandler<HTMLDivElement>;
  onMouseUpCapture?: MouseEventHandler<HTMLDivElement>;
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onFocusCapture?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
  onBlurCapture?: FocusEventHandler<HTMLDivElement>;
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
  {
    id,
    as = 'div',
    role,
    dir,
    justify,
    align,
    self,
    grow,
    shrink,
    wrap,
    base,
    gap,
    draggable,
    tabIndex,
    style,
    className,
    children,
    onAuxClick,
    onAuxClickCapture,
    onClick,
    onClickCapture,
    onContextMenu,
    onContextMenuCapture,
    onDoubleClick,
    onDoubleClickCapture,
    onDrag,
    onDragCapture,
    onDragEnd,
    onDragEndCapture,
    onDragEnter,
    onDragEnterCapture,
    onDragLeave,
    onDragLeaveCapture,
    onDragOver,
    onDragOverCapture,
    onDragStart,
    onDragStartCapture,
    onDrop,
    onDropCapture,
    onMouseDown,
    onMouseDownCapture,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    onMouseMoveCapture,
    onMouseOut,
    onMouseOutCapture,
    onMouseOver,
    onMouseOverCapture,
    onMouseUp,
    onMouseUpCapture,
    onFocus,
    onFocusCapture,
    onBlur,
    onBlurCapture,
  },
  ref,
) {
  return createElement(
    as,
    {
      id,
      role,
      ref,
      draggable,
      tabIndex,
      style,
      className: cn(
        flexB({
          dir,
          justify,
          align,
          self,
          grow,
          shrink,
          wrap,
          base,
          gap,
        }),
        className,
      ),
      onAuxClick,
      onAuxClickCapture,
      onClick,
      onClickCapture,
      onContextMenu,
      onContextMenuCapture,
      onDoubleClick,
      onDoubleClickCapture,
      onDrag,
      onDragCapture,
      onDragEnd,
      onDragEndCapture,
      onDragEnter,
      onDragEnterCapture,
      onDragLeave,
      onDragLeaveCapture,
      onDragOver,
      onDragOverCapture,
      onDragStart,
      onDragStartCapture,
      onDrop,
      onDropCapture,
      onMouseDown,
      onMouseDownCapture,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseMoveCapture,
      onMouseOut,
      onMouseOutCapture,
      onMouseOver,
      onMouseOverCapture,
      onMouseUp,
      onMouseUpCapture,
      onFocus,
      onFocusCapture,
      onBlur,
      onBlurCapture,
    },
    children,
  );
});
