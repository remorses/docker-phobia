/* eslint-disable */
// https :https://framerusercontent.com/modules/ncTpzEiw3qNOep3VTZcG/3aEAyRlZV6QPh0MaDd3X/IV_7SD635.js
import { jsx as _jsx3, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider,
  ControlType as ControlType3,
  cx,
  getFonts,
  Link,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React3 from 'react';

// https :https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/zb1zVBMZJKgPMiedOi0y/Feather.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import * as React2 from 'react';
import { useEffect, useRef, useState, } from 'react';
import { addPropertyControls, ControlType as ControlType2, RenderTarget, } from 'unframer';

// https :https://framer.com/m/framer/icon-nullstate.js@0.7.0
import { jsx as _jsx, } from 'react/jsx-runtime';
import * as React from 'react';
var containerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: 'rgba(149, 149, 149, 0.1)',
  border: '1px dashed rgba(149, 149, 149, 0.15)',
  color: '#a5a5a5',
  flexDirection: 'column',
};
var NullState = /* @__PURE__ */ React.forwardRef((_, ref,) => {
  return /* @__PURE__ */ _jsx('div', {
    style: emptyStateStyle,
    ref,
  },);
},);

// https :https://framer.com/m/feather-icons/home.js@0.0.29
var r;
var s = (o,) => {
  if (!r) {
    const n = o.forwardRef(({ color: t = 'currentColor', size: e = 24, ...i }, l,) =>
      o.createElement(
        'svg',
        {
          ref: l,
          xmlns: 'http://www.w3.org/2000/svg',
          width: e,
          height: e,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: t,
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          ...i,
        },
        o.createElement('path', { d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', },),
        o.createElement('polyline', { points: '9 22 9 12 15 12 15 22', },),
      )
    );
    n.displayName = 'Home', r = n;
  }
  return r;
};

// https :https://framerusercontent.com/modules/Ma20hU0GGRxLxZphbywl/OSpwWF91FHPVFyQJjMHt/utils.js
import { useMemo, } from 'react';
import { ControlType, } from 'unframer';
var defaultEvents = {
  onClick: { type: ControlType.EventHandler, },
  onMouseDown: { type: ControlType.EventHandler, },
  onMouseUp: { type: ControlType.EventHandler, },
  onMouseEnter: { type: ControlType.EventHandler, },
  onMouseLeave: { type: ControlType.EventHandler, },
};
var findByArray = (arr, search,) => arr.find((a,) => a.toLowerCase().includes(search,));
function useIconSelection(iconKeys2, selectByList, iconSearch = '', iconSelection, lowercaseIconKeyPairs2,) {
  const iconSearchResult = useMemo(() => {
    if (iconSearch == null || (iconSearch === null || iconSearch === void 0 ? void 0 : iconSearch.length) === 0) return null;
    const iconSearchTerm = iconSearch.toLowerCase().replace(/-|\s/g, '',);
    var _iconSearchTerm;
    const searchResult = (_iconSearchTerm = lowercaseIconKeyPairs2[iconSearchTerm]) !== null && _iconSearchTerm !== void 0
      ? _iconSearchTerm
      : findByArray(iconKeys2, iconSearchTerm,);
    return searchResult;
  }, [iconSelection, iconSearch,],);
  const name = selectByList ? iconSelection : iconSearchResult;
  return name;
}

// https :https://framerusercontent.com/modules/f0DboytQenYh21kfme7W/zb1zVBMZJKgPMiedOi0y/Feather.js
var iconKeys = [
  'activity',
  'airplay',
  'alert-circle',
  'alert-octagon',
  'alert-triangle',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'anchor',
  'aperture',
  'archive',
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-left',
  'arrow-down-right',
  'arrow-left',
  'arrow-left-circle',
  'arrow-right',
  'arrow-right-circle',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-left',
  'arrow-up-right',
  'at-sign',
  'award',
  'bar-chart',
  'bar-chart-2',
  'battery',
  'battery-charging',
  'bell',
  'bell-off',
  'bluetooth',
  'bold',
  'book',
  'book-open',
  'bookmark',
  'box',
  'briefcase',
  'calendar',
  'camera',
  'camera-off',
  'cast',
  'check',
  'check-circle',
  'check-square',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'chevrons-down',
  'chevrons-left',
  'chevrons-right',
  'chevrons-up',
  'chrome',
  'circle',
  'clipboard',
  'clock',
  'cloud',
  'cloud-drizzle',
  'cloud-lightning',
  'cloud-off',
  'cloud-rain',
  'cloud-snow',
  'code',
  'codepen',
  'codesandbox',
  'coffee',
  'columns',
  'command',
  'compass',
  'copy',
  'corner-down-left',
  'corner-down-right',
  'corner-left-down',
  'corner-left-up',
  'corner-right-down',
  'corner-right-up',
  'corner-up-left',
  'corner-up-right',
  'cpu',
  'credit-card',
  'crop',
  'crosshair',
  'database',
  'delete',
  'disc',
  'divide',
  'divide-circle',
  'divide-square',
  'dollar-sign',
  'download',
  'download-cloud',
  'dribbble',
  'droplet',
  'edit',
  'edit-2',
  'edit-3',
  'external-link',
  'eye',
  'eye-off',
  'facebook',
  'fast-forward',
  'feather',
  'figma',
  'file',
  'file-minus',
  'file-plus',
  'file-text',
  'film',
  'filter',
  'flag',
  'folder',
  'folder-minus',
  'folder-plus',
  'framer',
  'frown',
  'gift',
  'git-branch',
  'git-commit',
  'git-merge',
  'git-pull-request',
  'github',
  'gitlab',
  'globe',
  'grid',
  'hard-drive',
  'hash',
  'headphones',
  'heart',
  'help-circle',
  'hexagon',
  'home',
  'image',
  'inbox',
  'info',
  'instagram',
  'italic',
  'key',
  'layers',
  'layout',
  'life-buoy',
  'link',
  'link-2',
  'linkedin',
  'list',
  'loader',
  'lock',
  'log-in',
  'log-out',
  'mail',
  'map',
  'map-pin',
  'maximize',
  'maximize-2',
  'meh',
  'menu',
  'message-circle',
  'message-square',
  'mic',
  'mic-off',
  'minimize',
  'minimize-2',
  'minus',
  'minus-circle',
  'minus-square',
  'monitor',
  'moon',
  'more-horizontal',
  'more-vertical',
  'mouse-pointer',
  'move',
  'music',
  'navigation',
  'navigation-2',
  'octagon',
  'package',
  'paperclip',
  'pause',
  'pause-circle',
  'pen-tool',
  'percent',
  'phone',
  'phone-call',
  'phone-forwarded',
  'phone-incoming',
  'phone-missed',
  'phone-off',
  'phone-outgoing',
  'pie-chart',
  'play',
  'play-circle',
  'plus',
  'plus-circle',
  'plus-square',
  'pocket',
  'power',
  'printer',
  'radio',
  'refresh-ccw',
  'refresh-cw',
  'repeat',
  'rewind',
  'rotate-ccw',
  'rotate-cw',
  'rss',
  'save',
  'scissors',
  'search',
  'send',
  'server',
  'settings',
  'share',
  'share-2',
  'shield',
  'shield-off',
  'shopping-bag',
  'shopping-cart',
  'shuffle',
  'sidebar',
  'skip-back',
  'skip-forward',
  'slack',
  'slash',
  'sliders',
  'smartphone',
  'smile',
  'speaker',
  'square',
  'star',
  'stop-circle',
  'sun',
  'sunrise',
  'sunset',
  'tablet',
  'tag',
  'target',
  'terminal',
  'thermometer',
  'thumbs-down',
  'thumbs-up',
  'toggle-left',
  'toggle-right',
  'tool',
  'trash',
  'trash-2',
  'trello',
  'trending-down',
  'trending-up',
  'triangle',
  'truck',
  'tv',
  'twitch',
  'twitter',
  'type',
  'umbrella',
  'underline',
  'unlock',
  'upload',
  'upload-cloud',
  'user',
  'user-check',
  'user-minus',
  'user-plus',
  'user-x',
  'users',
  'video',
  'video-off',
  'voicemail',
  'volume',
  'volume-1',
  'volume-2',
  'volume-x',
  'watch',
  'wifi',
  'wifi-off',
  'wind',
  'x',
  'x-circle',
  'x-octagon',
  'x-square',
  'youtube',
  'zap',
  'zap-off',
  'zoom-in',
  'zoom-out',
];
var moduleBaseUrl = 'https://framer.com/m/feather-icons/';
var uppercaseIconKeys = iconKeys.map((name,) => name.charAt(0,).toUpperCase() + name.slice(1,));
var lowercaseIconKeyPairs = iconKeys.reduce((res, key,) => {
  res[key.toLowerCase()] = key;
  return res;
}, {},);
function Icon(props,) {
  const { color, selectByList, iconSearch, iconSelection, onClick, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave, mirrored, } = props;
  const isMounted = useRef(false,);
  const iconKey = useIconSelection(iconKeys, selectByList, iconSearch, iconSelection, lowercaseIconKeyPairs,);
  const [SelectedIcon, setSelectedIcon,] = useState(iconKey === 'Home' ? s(React2,) : null,);
  async function importModule() {
    let active = true;
    try {
      const iconModuleUrl = `${moduleBaseUrl}${iconKey}.js@0.0.29`;
      const module = await import(
        /* webpackIgnore: true */
        iconModuleUrl
      );
      if (active) setSelectedIcon(module.default(React2,),);
    } catch (e) {
      console.log(e,);
      if (active) setSelectedIcon(null,);
    }
    return () => {
      active = false;
    };
  }
  useEffect(() => {
    importModule();
  }, [iconKey,],);
  const isOnCanvas = RenderTarget.current() === RenderTarget.canvas;
  const emptyState = isOnCanvas ? /* @__PURE__ */ _jsx2(NullState, {},) : null;
  return /* @__PURE__ */ _jsx2('div', {
    style: { display: 'contents', },
    onClick,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    children: SelectedIcon
      ? /* @__PURE__ */ _jsx2(SelectedIcon, {
        style: { width: '100%', height: '100%', transform: mirrored ? 'scale(-1, 1)' : void 0, },
        color,
      },)
      : emptyState,
  },);
}
Icon.displayName = 'Feather';
Icon.defaultProps = {
  width: 24,
  height: 24,
  iconSelection: 'home',
  iconSearch: 'Home',
  color: '#66F',
  selectByList: true,
  mirrored: false,
};
addPropertyControls(Icon, {
  selectByList: {
    type: ControlType2.Boolean,
    title: 'Select',
    enabledTitle: 'List',
    disabledTitle: 'Search',
    defaultValue: Icon.defaultProps.selectByList,
  },
  iconSelection: {
    type: ControlType2.Enum,
    options: iconKeys,
    optionTitles: uppercaseIconKeys,
    defaultValue: Icon.defaultProps.iconSelection,
    title: 'Name',
    hidden: ({ selectByList, },) => !selectByList,
    description: 'Find every icon name on the [Feather site](https://feathericons.com/)',
  },
  iconSearch: {
    type: ControlType2.String,
    title: 'Name',
    placeholder: 'Menu, Wifi, Box\u2026',
    hidden: ({ selectByList, },) => selectByList,
  },
  mirrored: { type: ControlType2.Boolean, enabledTitle: 'Yes', disabledTitle: 'No', defaultValue: Icon.defaultProps.mirrored, },
  color: { type: ControlType2.Color, title: 'Color', defaultValue: Icon.defaultProps.color, },
  ...defaultEvents,
},);

// https :https://framerusercontent.com/modules/p7DiPlxwmZRnbXZprlOe/bQ4uYc60D38shC0lhya4/uMdppUE31.js
import { fontStore, } from 'unframer';
fontStore.loadFonts(['GF;Space Grotesk-regular', 'GF;Space Grotesk-700',],);
var fonts = [{
  family: 'Space Grotesk',
  source: 'google',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUUsmNsFjTDJK.woff2',
  weight: '400',
}, {
  family: 'Space Grotesk',
  source: 'google',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksmNsFjTDJK.woff2',
  weight: '700',
},];
var css = [
  '.framer-ktWBo .framer-styles-preset-17ww93c:not(.rich-text-wrapper), .framer-ktWBo .framer-styles-preset-17ww93c.rich-text-wrapper p { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-family-bold: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.7em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-c46c0c2d-e53e-42e7-8f54-be852f62337f, #e0e8d2); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className = 'framer-ktWBo';

// https :https://framerusercontent.com/modules/ncTpzEiw3qNOep3VTZcG/3aEAyRlZV6QPh0MaDd3X/IV_7SD635.js
var FeatherFonts = getFonts(Icon,);
var enabledGestures = { qoShHVBll: { hover: true, }, };
var cycleOrder = ['qoShHVBll',];
var serializationHash = 'framer-PaIEH';
var variantClassNames = { qoShHVBll: 'framer-v-1bo1b3n', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React3.Fragment,);
var getProps = ({ height, hover, iconVisible, id, link, tap, title, width, ...props },) => {
  var _ref;
  return {
    ...props,
    cRqRWoih6: link !== null && link !== void 0 ? link : props.cRqRWoih6,
    Oc0fzh3x0: iconVisible !== null && iconVisible !== void 0 ? iconVisible : props.Oc0fzh3x0,
    okFfDCMAr: (_ref = title !== null && title !== void 0 ? title : props.okFfDCMAr) !== null && _ref !== void 0 ? _ref : 'Home',
    oxH5zj9aM: tap !== null && tap !== void 0 ? tap : props.oxH5zj9aM,
    Usq46WHfY: hover !== null && hover !== void 0 ? hover : props.Usq46WHfY,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, okFfDCMAr, cRqRWoih6, Oc0fzh3x0, oxH5zj9aM, Usq46WHfY, ...restProps } = getProps(
    props,
  );
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'qoShHVBll',
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap1k44oqp = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    if (oxH5zj9aM) {
      const res = await oxH5zj9aM(...args,);
      if (res === false) return false;
    }
  },);
  const onMouseEnter185usnc = activeVariantCallback(async (...args) => {
    if (Usq46WHfY) {
      const res = await Usq46WHfY(...args,);
      if (res === false) return false;
    }
  },);
  const ref1 = React3.useRef(null,);
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [className,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx3(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx3(Link, {
          href: cRqRWoih6,
          openInNewTab: false,
          smoothScroll: true,
          children: /* @__PURE__ */ _jsxs(motion.a, {
            ...restProps,
            className: `${cx(serializationHash, ...sharedStyleClassNames, 'framer-1bo1b3n', className2, classNames,)} framer-13u7j1e`,
            'data-framer-name': 'Primary Navitem',
            'data-highlight': true,
            layoutDependency,
            layoutId: 'qoShHVBll',
            onHoverEnd: () => setGestureState({ isHovered: false, },),
            onHoverStart: () => setGestureState({ isHovered: true, },),
            onMouseEnter: onMouseEnter185usnc,
            onTap: onTap1k44oqp,
            onTapCancel: () => setGestureState({ isPressed: false, },),
            onTapStart: () => setGestureState({ isPressed: true, },),
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: { ...style, },
            ...addPropertyOverrides({ 'qoShHVBll-hover': { 'data-framer-name': void 0, }, }, baseVariant, gestureVariant,),
            children: [
              /* @__PURE__ */ _jsx3(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                  children: /* @__PURE__ */ _jsx3(motion.p, {
                    className: 'framer-styles-preset-17ww93c',
                    'data-styles-preset': 'uMdppUE31',
                    style: {
                      '--framer-text-color':
                        'var(--extracted-r6o4lv, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                    },
                    children: 'Home',
                  },),
                },),
                className: 'framer-1qpi1eb',
                layoutDependency,
                layoutId: 'nFiAiLydr',
                style: {
                  '--extracted-r6o4lv': 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))',
                  '--framer-paragraph-spacing': '0px',
                },
                text: okFfDCMAr,
                variants: { 'qoShHVBll-hover': { '--extracted-r6o4lv': 'rgba(255, 255, 255, 0.6)', }, },
                verticalAlignment: 'top',
                withExternalLayout: true,
                ...addPropertyOverrides(
                  {
                    'qoShHVBll-hover': {
                      children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                        children: /* @__PURE__ */ _jsx3(motion.p, {
                          className: 'framer-styles-preset-17ww93c',
                          'data-styles-preset': 'uMdppUE31',
                          style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgba(255, 255, 255, 0.6))', },
                          children: 'Home',
                        },),
                      },),
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
              Oc0fzh3x0 && /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                children: /* @__PURE__ */ _jsx3(motion.div, {
                  className: 'framer-10aaz4-container',
                  layoutDependency,
                  layoutId: 'GP7VlGddj-container',
                  style: { rotate: 0, },
                  variants: { 'qoShHVBll-hover': { rotate: 180, }, },
                  children: /* @__PURE__ */ _jsx3(Icon, {
                    color: 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))',
                    height: '100%',
                    iconSearch: 'Home',
                    iconSelection: 'plus',
                    id: 'GP7VlGddj',
                    layoutId: 'GP7VlGddj',
                    mirrored: false,
                    selectByList: true,
                    style: { height: '100%', width: '100%', },
                    width: '100%',
                    ...addPropertyOverrides({ 'qoShHVBll-hover': { color: 'rgba(255, 255, 255, 0.6)', }, }, baseVariant, gestureVariant,),
                  },),
                },),
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var css2 = [
  '.framer-PaIEH[data-border="true"]::after, .framer-PaIEH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-PaIEH.framer-13u7j1e, .framer-PaIEH .framer-13u7j1e { display: block; }',
  '.framer-PaIEH.framer-1bo1b3n { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: min-content; }',
  '.framer-PaIEH .framer-1qpi1eb { cursor: pointer; flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }',
  '.framer-PaIEH .framer-10aaz4-container { flex: none; height: 16px; position: relative; width: 16px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PaIEH.framer-1bo1b3n { gap: 0px; } .framer-PaIEH.framer-1bo1b3n > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-PaIEH.framer-1bo1b3n > :first-child { margin-left: 0px; } .framer-PaIEH.framer-1bo1b3n > :last-child { margin-right: 0px; } }',
  ...css,
];
var FramerIV_7SD635 = withCSS(Component, css2, 'framer-PaIEH',);
var stdin_default = FramerIV_7SD635;
FramerIV_7SD635.displayName = 'Nav-item';
FramerIV_7SD635.defaultProps = { height: 27, width: 44, };
addPropertyControls2(FramerIV_7SD635, {
  okFfDCMAr: { defaultValue: 'Home', displayTextArea: false, title: 'Title', type: ControlType3.String, },
  cRqRWoih6: { title: 'Link', type: ControlType3.Link, },
  Oc0fzh3x0: { defaultValue: false, title: 'Icon Visible', type: ControlType3.Boolean, },
  oxH5zj9aM: { title: 'Tap', type: ControlType3.EventHandler, },
  Usq46WHfY: { title: 'Hover', type: ControlType3.EventHandler, },
},);
addFonts(FramerIV_7SD635, [...FeatherFonts, ...fonts,],);

// https :https://framerusercontent.com/modules/5QRYlW5CrylEOId9f3t8/kB6rhuRIreqBukx9G4Ea/ucwWlX6GW.js
import { jsx as _jsx4, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls3,
  ControlType as ControlType4,
  cx as cx2,
  RichText as RichText2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React4 from 'react';
var cycleOrder2 = ['Rn9w0YeZq', 'nmxb4stu_',];
var serializationHash2 = 'framer-lr1BE';
var variantClassNames2 = { nmxb4stu_: 'framer-v-7vvplj', Rn9w0YeZq: 'framer-v-1sjz2ac', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition2 = ({ value, children, },) => {
  const config = React4.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React4.Fragment,);
var humanReadableVariantMap = { ' Main Logo': 'Rn9w0YeZq', 'Footer Logo': 'nmxb4stu_', };
var getProps2 = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'Rn9w0YeZq',
  };
};
var createLayoutDependency2 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component2 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'Rn9w0YeZq',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const ref1 = React4.useRef(null,);
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx4(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx4(Transition2, {
        value: transition1,
        children: /* @__PURE__ */ _jsx4(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          background: { alt: '', fit: 'fill', intrinsicHeight: 41, intrinsicWidth: 157, },
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-1sjz2ac', className2, classNames,),
          'data-framer-name': ' Main Logo',
          layoutDependency,
          layoutId: 'Rn9w0YeZq',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides2(
            {
              nmxb4stu_: {
                'data-framer-name': 'Footer Logo',
                background: {
                  alt: '',
                  fit: 'fill',
                  intrinsicHeight: 49,
                  intrinsicWidth: 182,
                  pixelHeight: 49,
                  pixelWidth: 182,
                  src: 'https://framerusercontent.com/images/OsC9H711Vwl2gg8Ui39OXQ97hGE.svg',
                },
              },
            },
            baseVariant,
            gestureVariant,
          ),
          children: /* @__PURE__ */ _jsx4(RichText2, {
            __fromCanvasComponent: true,
            children: /* @__PURE__ */ _jsx4(React4.Fragment, {
              children: /* @__PURE__ */ _jsx4(motion2.p, {
                style: {
                  '--font-selector': 'R0Y7U3BhY2UgR3JvdGVzay03MDA=',
                  '--framer-font-family': '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                  '--framer-font-size': '26px',
                  '--framer-font-weight': '700',
                  '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                },
                children: 'dockerphobia',
              },),
            },),
            className: 'framer-m0itqa',
            fonts: ['GF;Space Grotesk-700',],
            layoutDependency,
            layoutId: 'Ow9twoZCm',
            style: {
              '--extracted-r6o4lv': 'rgb(255, 255, 255)',
              '--framer-link-text-color': 'rgb(0, 153, 255)',
              '--framer-link-text-decoration': 'underline',
              opacity: 0.82,
            },
            verticalAlignment: 'top',
            withExternalLayout: true,
          },),
        },),
      },),
    },),
  },);
},);
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-lr1BE.framer-hu2qn9, .framer-lr1BE .framer-hu2qn9 { display: block; }',
  '.framer-lr1BE.framer-1sjz2ac { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
  '.framer-lr1BE .framer-m0itqa { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-lr1BE.framer-1sjz2ac { gap: 0px; } .framer-lr1BE.framer-1sjz2ac > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-lr1BE.framer-1sjz2ac > :first-child { margin-left: 0px; } .framer-lr1BE.framer-1sjz2ac > :last-child { margin-right: 0px; } }',
  '.framer-lr1BE.framer-v-7vvplj.framer-1sjz2ac { height: 49px; }',
];
var FramerucwWlX6GW = withCSS2(Component2, css3, 'framer-lr1BE',);
var stdin_default2 = FramerucwWlX6GW;
FramerucwWlX6GW.displayName = 'Logo';
FramerucwWlX6GW.defaultProps = { height: 31, width: 174, };
addPropertyControls3(FramerucwWlX6GW, {
  variant: {
    options: ['Rn9w0YeZq', 'nmxb4stu_',],
    optionTitles: [' Main Logo', 'Footer Logo',],
    title: 'Variant',
    type: ControlType4.Enum,
  },
},);
addFonts2(FramerucwWlX6GW, [{
  explicitInter: true,
  fonts: [{
    family: 'Space Grotesk',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksmNsFjTDJK.woff2',
    weight: '700',
  },],
},], { supportsExplicitInterCodegen: true, },);

export { className, css, fonts, Icon, stdin_default, stdin_default2, };
