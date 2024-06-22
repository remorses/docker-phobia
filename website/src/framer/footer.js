/* eslint-disable */
'use client';
import { Icon, stdin_default, stdin_default2, } from './chunk-HJZEKVSZ.js';

// https :https://framerusercontent.com/modules/iQvupuYxJoIOXZmwWbPj/vzt1AdK4B7O19dy7GWAS/e4TNFUMUz.js
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider as ComponentViewportProvider2,
  ControlType as ControlType2,
  cx as cx2,
  getFonts as getFonts2,
  ResolveLinks,
  RichText,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useRouter,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
  withFX,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/bJ4nouCX6S7ru7M3Mm9n/SL9GMj1xQQGeqnhpBgEj/jqK_GhKTO.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  getPropertyControls,
  Link,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var FeatherFonts = getFonts(Icon,);
var FeatherControls = getPropertyControls(Icon,);
var enabledGestures = { Qt8uCYS0y: { hover: true, }, };
var cycleOrder = ['Qt8uCYS0y',];
var serializationHash = 'framer-Salbw';
var variantClassNames = { Qt8uCYS0y: 'framer-v-k4www4', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableEnumMap = {
  'Alert-circle': 'alert-circle',
  'Alert-octagon': 'alert-octagon',
  'Alert-triangle': 'alert-triangle',
  'Align-center': 'align-center',
  'Align-justify': 'align-justify',
  'Align-left': 'align-left',
  'Align-right': 'align-right',
  'Arrow-down-circle': 'arrow-down-circle',
  'Arrow-down-left': 'arrow-down-left',
  'Arrow-down-right': 'arrow-down-right',
  'Arrow-down': 'arrow-down',
  'Arrow-left-circle': 'arrow-left-circle',
  'Arrow-left': 'arrow-left',
  'Arrow-right-circle': 'arrow-right-circle',
  'Arrow-right': 'arrow-right',
  'Arrow-up-circle': 'arrow-up-circle',
  'Arrow-up-left': 'arrow-up-left',
  'Arrow-up-right': 'arrow-up-right',
  'Arrow-up': 'arrow-up',
  'At-sign': 'at-sign',
  'Bar-chart-2': 'bar-chart-2',
  'Bar-chart': 'bar-chart',
  'Battery-charging': 'battery-charging',
  'Bell-off': 'bell-off',
  'Book-open': 'book-open',
  'Camera-off': 'camera-off',
  'Check-circle': 'check-circle',
  'Check-square': 'check-square',
  'Chevron-down': 'chevron-down',
  'Chevron-left': 'chevron-left',
  'Chevron-right': 'chevron-right',
  'Chevron-up': 'chevron-up',
  'Chevrons-down': 'chevrons-down',
  'Chevrons-left': 'chevrons-left',
  'Chevrons-right': 'chevrons-right',
  'Chevrons-up': 'chevrons-up',
  'Cloud-drizzle': 'cloud-drizzle',
  'Cloud-lightning': 'cloud-lightning',
  'Cloud-off': 'cloud-off',
  'Cloud-rain': 'cloud-rain',
  'Cloud-snow': 'cloud-snow',
  'Corner-down-left': 'corner-down-left',
  'Corner-down-right': 'corner-down-right',
  'Corner-left-down': 'corner-left-down',
  'Corner-left-up': 'corner-left-up',
  'Corner-right-down': 'corner-right-down',
  'Corner-right-up': 'corner-right-up',
  'Corner-up-left': 'corner-up-left',
  'Corner-up-right': 'corner-up-right',
  'Credit-card': 'credit-card',
  'Divide-circle': 'divide-circle',
  'Divide-square': 'divide-square',
  'Dollar-sign': 'dollar-sign',
  'Download-cloud': 'download-cloud',
  'Edit-2': 'edit-2',
  'Edit-3': 'edit-3',
  'External-link': 'external-link',
  'Eye-off': 'eye-off',
  'Fast-forward': 'fast-forward',
  'File-minus': 'file-minus',
  'File-plus': 'file-plus',
  'File-text': 'file-text',
  'Folder-minus': 'folder-minus',
  'Folder-plus': 'folder-plus',
  'Git-branch': 'git-branch',
  'Git-commit': 'git-commit',
  'Git-merge': 'git-merge',
  'Git-pull-request': 'git-pull-request',
  'Hard-drive': 'hard-drive',
  'Help-circle': 'help-circle',
  'Life-buoy': 'life-buoy',
  'Link-2': 'link-2',
  'Log-in': 'log-in',
  'Log-out': 'log-out',
  'Map-pin': 'map-pin',
  'Maximize-2': 'maximize-2',
  'Message-circle': 'message-circle',
  'Message-square': 'message-square',
  'Mic-off': 'mic-off',
  'Minimize-2': 'minimize-2',
  'Minus-circle': 'minus-circle',
  'Minus-square': 'minus-square',
  'More-horizontal': 'more-horizontal',
  'More-vertical': 'more-vertical',
  'Mouse-pointer': 'mouse-pointer',
  'Navigation-2': 'navigation-2',
  'Pause-circle': 'pause-circle',
  'Pen-tool': 'pen-tool',
  'Phone-call': 'phone-call',
  'Phone-forwarded': 'phone-forwarded',
  'Phone-incoming': 'phone-incoming',
  'Phone-missed': 'phone-missed',
  'Phone-off': 'phone-off',
  'Phone-outgoing': 'phone-outgoing',
  'Pie-chart': 'pie-chart',
  'Play-circle': 'play-circle',
  'Plus-circle': 'plus-circle',
  'Plus-square': 'plus-square',
  'Refresh-ccw': 'refresh-ccw',
  'Refresh-cw': 'refresh-cw',
  'Rotate-ccw': 'rotate-ccw',
  'Rotate-cw': 'rotate-cw',
  'Share-2': 'share-2',
  'Shield-off': 'shield-off',
  'Shopping-bag': 'shopping-bag',
  'Shopping-cart': 'shopping-cart',
  'Skip-back': 'skip-back',
  'Skip-forward': 'skip-forward',
  'Stop-circle': 'stop-circle',
  'Thumbs-down': 'thumbs-down',
  'Thumbs-up': 'thumbs-up',
  'Toggle-left': 'toggle-left',
  'Toggle-right': 'toggle-right',
  'Trash-2': 'trash-2',
  'Trending-down': 'trending-down',
  'Trending-up': 'trending-up',
  'Upload-cloud': 'upload-cloud',
  'User-check': 'user-check',
  'User-minus': 'user-minus',
  'User-plus': 'user-plus',
  'User-x': 'user-x',
  'Video-off': 'video-off',
  'Volume-1': 'volume-1',
  'Volume-2': 'volume-2',
  'Volume-x': 'volume-x',
  'Wifi-off': 'wifi-off',
  'X-circle': 'x-circle',
  'X-octagon': 'x-octagon',
  'X-square': 'x-square',
  'Zap-off': 'zap-off',
  'Zoom-in': 'zoom-in',
  'Zoom-out': 'zoom-out',
  Activity: 'activity',
  Airplay: 'airplay',
  Anchor: 'anchor',
  Aperture: 'aperture',
  Archive: 'archive',
  Award: 'award',
  Battery: 'battery',
  Bell: 'bell',
  Bluetooth: 'bluetooth',
  Bold: 'bold',
  Book: 'book',
  Bookmark: 'bookmark',
  Box: 'box',
  Briefcase: 'briefcase',
  Calendar: 'calendar',
  Camera: 'camera',
  Cast: 'cast',
  Check: 'check',
  Chrome: 'chrome',
  Circle: 'circle',
  Clipboard: 'clipboard',
  Clock: 'clock',
  Cloud: 'cloud',
  Code: 'code',
  Codepen: 'codepen',
  Codesandbox: 'codesandbox',
  Coffee: 'coffee',
  Columns: 'columns',
  Command: 'command',
  Compass: 'compass',
  Copy: 'copy',
  Cpu: 'cpu',
  Crop: 'crop',
  Crosshair: 'crosshair',
  Database: 'database',
  Delete: 'delete',
  Disc: 'disc',
  Divide: 'divide',
  Download: 'download',
  Dribbble: 'dribbble',
  Droplet: 'droplet',
  Edit: 'edit',
  Eye: 'eye',
  Facebook: 'facebook',
  Feather: 'feather',
  Figma: 'figma',
  File: 'file',
  Film: 'film',
  Filter: 'filter',
  Flag: 'flag',
  Folder: 'folder',
  Framer: 'framer',
  Frown: 'frown',
  Gift: 'gift',
  Github: 'github',
  Gitlab: 'gitlab',
  Globe: 'globe',
  Grid: 'grid',
  Hash: 'hash',
  Headphones: 'headphones',
  Heart: 'heart',
  Hexagon: 'hexagon',
  Home: 'home',
  Image: 'image',
  Inbox: 'inbox',
  Info: 'info',
  Instagram: 'instagram',
  Italic: 'italic',
  Key: 'key',
  Layers: 'layers',
  Layout: 'layout',
  Link: 'link',
  Linkedin: 'linkedin',
  List: 'list',
  Loader: 'loader',
  Lock: 'lock',
  Mail: 'mail',
  Map: 'map',
  Maximize: 'maximize',
  Meh: 'meh',
  Menu: 'menu',
  Mic: 'mic',
  Minimize: 'minimize',
  Minus: 'minus',
  Monitor: 'monitor',
  Moon: 'moon',
  Move: 'move',
  Music: 'music',
  Navigation: 'navigation',
  Octagon: 'octagon',
  Package: 'package',
  Paperclip: 'paperclip',
  Pause: 'pause',
  Percent: 'percent',
  Phone: 'phone',
  Play: 'play',
  Plus: 'plus',
  Pocket: 'pocket',
  Power: 'power',
  Printer: 'printer',
  Radio: 'radio',
  Repeat: 'repeat',
  Rewind: 'rewind',
  Rss: 'rss',
  Save: 'save',
  Scissors: 'scissors',
  Search: 'search',
  Send: 'send',
  Server: 'server',
  Settings: 'settings',
  Share: 'share',
  Shield: 'shield',
  Shuffle: 'shuffle',
  Sidebar: 'sidebar',
  Slack: 'slack',
  Slash: 'slash',
  Sliders: 'sliders',
  Smartphone: 'smartphone',
  Smile: 'smile',
  Speaker: 'speaker',
  Square: 'square',
  Star: 'star',
  Sun: 'sun',
  Sunrise: 'sunrise',
  Sunset: 'sunset',
  Tablet: 'tablet',
  Tag: 'tag',
  Target: 'target',
  Terminal: 'terminal',
  Thermometer: 'thermometer',
  Tool: 'tool',
  Trash: 'trash',
  Trello: 'trello',
  Triangle: 'triangle',
  Truck: 'truck',
  Tv: 'tv',
  Twitch: 'twitch',
  Twitter: 'twitter',
  Type: 'type',
  Umbrella: 'umbrella',
  Underline: 'underline',
  Unlock: 'unlock',
  Upload: 'upload',
  User: 'user',
  Users: 'users',
  Video: 'video',
  Voicemail: 'voicemail',
  Volume: 'volume',
  Watch: 'watch',
  Wifi: 'wifi',
  Wind: 'wind',
  X: 'x',
  Youtube: 'youtube',
  Zap: 'zap',
};
var getProps = ({ height, id, link, name1, width, ...props },) => {
  var _humanReadableEnumMap_name1, _ref, _ref1;
  return {
    ...props,
    AtQ5PEj2x: link !== null && link !== void 0 ? link : props.AtQ5PEj2x,
    f6skm2rkz:
      (_ref1 = (_ref = (_humanReadableEnumMap_name1 = humanReadableEnumMap[name1]) !== null && _humanReadableEnumMap_name1 !== void 0
                  ? _humanReadableEnumMap_name1
                  : name1) !== null && _ref !== void 0
            ? _ref
            : props.f6skm2rkz) !== null && _ref1 !== void 0
        ? _ref1
        : 'facebook',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, f6skm2rkz, AtQ5PEj2x, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'Qt8uCYS0y',
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx(Link, {
          href: AtQ5PEj2x,
          children: /* @__PURE__ */ _jsx(motion.a, {
            ...restProps,
            className: `${cx(serializationHash, ...sharedStyleClassNames, 'framer-k4www4', className, classNames,)} framer-1ft1x0s`,
            'data-framer-name': 'Variant 1',
            layoutDependency,
            layoutId: 'Qt8uCYS0y',
            onHoverEnd: () => setGestureState({ isHovered: false, },),
            onHoverStart: () => setGestureState({ isHovered: true, },),
            onTap: () => setGestureState({ isPressed: false, },),
            onTapCancel: () => setGestureState({ isPressed: false, },),
            onTapStart: () => setGestureState({ isPressed: true, },),
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: { ...style, },
            ...addPropertyOverrides({ 'Qt8uCYS0y-hover': { 'data-framer-name': void 0, }, }, baseVariant, gestureVariant,),
            children: /* @__PURE__ */ _jsx(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx(motion.div, {
                className: 'framer-jrb1he-container',
                layoutDependency,
                layoutId: 'I4X5WKxaL-container',
                children: /* @__PURE__ */ _jsx(Icon, {
                  color: 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))',
                  height: '100%',
                  iconSearch: 'Home',
                  iconSelection: f6skm2rkz,
                  id: 'I4X5WKxaL',
                  layoutId: 'I4X5WKxaL',
                  mirrored: false,
                  selectByList: true,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  ...addPropertyOverrides(
                    { 'Qt8uCYS0y-hover': { color: 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86))', }, },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
              },),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css = [
  '.framer-Salbw[data-border="true"]::after, .framer-Salbw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-Salbw.framer-1ft1x0s, .framer-Salbw .framer-1ft1x0s { display: block; }',
  '.framer-Salbw.framer-k4www4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 24px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; text-decoration: none; width: 24px; }',
  '.framer-Salbw .framer-jrb1he-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Salbw.framer-k4www4 { gap: 0px; } .framer-Salbw.framer-k4www4 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Salbw.framer-k4www4 > :first-child { margin-left: 0px; } .framer-Salbw.framer-k4www4 > :last-child { margin-right: 0px; } }',
];
var FramerjqK_GhKTO = withCSS(Component, css, 'framer-Salbw',);
var stdin_default3 = FramerjqK_GhKTO;
FramerjqK_GhKTO.displayName = 'Social icon';
FramerjqK_GhKTO.defaultProps = { height: 24, width: 24, };
addPropertyControls(FramerjqK_GhKTO, {
  f6skm2rkz: (FeatherControls === null || FeatherControls === void 0 ? void 0 : FeatherControls['iconSelection']) &&
    { ...FeatherControls['iconSelection'], defaultValue: 'facebook', description: void 0, hidden: void 0, title: 'Name', },
  AtQ5PEj2x: { title: 'Link', type: ControlType.Link, },
},);
addFonts(FramerjqK_GhKTO, [...FeatherFonts,],);

// https :https://framerusercontent.com/modules/iQvupuYxJoIOXZmwWbPj/vzt1AdK4B7O19dy7GWAS/e4TNFUMUz.js
var LogoFonts = getFonts2(stdin_default2,);
var SocialIconFonts = getFonts2(stdin_default3,);
var MotionDivWithFX = withFX(motion2.div,);
var NavItemFonts = getFonts2(stdin_default,);
var cycleOrder2 = ['JW3kIbJYM', 'jGxfdUJpH', 'z6EC3SumH', 'WQuTvhU4d',];
var serializationHash2 = 'framer-3NgdG';
var variantClassNames2 = {
  jGxfdUJpH: 'framer-v-1ivad0m',
  JW3kIbJYM: 'framer-v-1j13yy5',
  WQuTvhU4d: 'framer-v-4chavw',
  z6EC3SumH: 'framer-v-ju8sz3',
};
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transformPerspective: 1200, x: 0, y: 50, };
var transition2 = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: 'spring', };
var transition3 = { damping: 40, delay: 0.2, mass: 1, stiffness: 400, type: 'spring', };
var transition4 = { damping: 40, delay: 0.4, mass: 1, stiffness: 400, type: 'spring', };
var transition5 = { damping: 40, delay: 0.6, mass: 1, stiffness: 400, type: 'spring', };
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React2.Fragment,);
var humanReadableVariantMap = { Desktop: 'JW3kIbJYM', Laptop: 'jGxfdUJpH', Mobile: 'WQuTvhU4d', Tablet: 'z6EC3SumH', };
var getProps2 = ({ currentYear, height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref, _ref1;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'JW3kIbJYM',
    vJi5rlMqN: (_ref1 = currentYear !== null && currentYear !== void 0 ? currentYear : props.vJi5rlMqN) !== null && _ref1 !== void 0
      ? _ref1
      : '2024',
  };
};
var createLayoutDependency2 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className, layoutId, variant, vJi5rlMqN, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'JW3kIbJYM',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const ref1 = React2.useRef(null,);
  const router = useRouter();
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition2, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-1j13yy5', className, classNames,),
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'JW3kIbJYM',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides2(
            {
              jGxfdUJpH: { 'data-framer-name': 'Laptop', },
              WQuTvhU4d: { 'data-framer-name': 'Mobile', },
              z6EC3SumH: { 'data-framer-name': 'Tablet', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsxs(motion2.div, {
              className: 'framer-1sf2iwh',
              'data-framer-name': 'Top content',
              layoutDependency,
              layoutId: 'iA9MuLNJE',
              children: [
                /* @__PURE__ */ _jsxs(MotionDivWithFX, {
                  __framer__animate: { transition: transition2, },
                  __framer__animateOnce: true,
                  __framer__enter: animation,
                  __framer__styleAppearEffectEnabled: true,
                  __framer__threshold: 0.5,
                  __perspectiveFX: false,
                  __smartComponentFX: true,
                  __targetOpacity: 1,
                  className: 'framer-19sa18m',
                  'data-framer-name': 'Left',
                  layoutDependency,
                  layoutId: 'lSQViQ4N5',
                  style: { transformPerspective: 1200, },
                  children: [
                    /* @__PURE__ */ _jsxs(motion2.div, {
                      className: 'framer-jniv1e',
                      'data-framer-name': 'Logo & Text',
                      layoutDependency,
                      layoutId: 'yOGfUe6qN',
                      children: [
                        /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                          children: /* @__PURE__ */ _jsx2(motion2.div, {
                            className: 'framer-8lapr5-container',
                            layoutDependency,
                            layoutId: 'WjHohMlXy-container',
                            children: /* @__PURE__ */ _jsx2(stdin_default2, {
                              height: '100%',
                              id: 'WjHohMlXy',
                              layoutId: 'WjHohMlXy',
                              variant: 'Rn9w0YeZq',
                              width: '100%',
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx2(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                            children: /* @__PURE__ */ _jsx2(motion2.p, {
                              style: {
                                '--font-selector': 'R0Y7U3BhY2UgR3JvdGVzay1yZWd1bGFy',
                                '--framer-font-family': '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                                '--framer-line-height': '1.7em',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                              },
                              children: 'Inspect any Docker image size, we help you make them smaller, faster and safer.',
                            },),
                          },),
                          className: 'framer-sfzc50',
                          'data-framer-name':
                            'Secure, transparent transfer of data and value without centralized control. Building blocks for Web3 and metaverse',
                          fonts: ['GF;Space Grotesk-regular',],
                          layoutDependency,
                          layoutId: 'oB8IygPxJ',
                          style: {
                            '--extracted-r6o4lv': 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))',
                            '--framer-paragraph-spacing': '0px',
                            opacity: 0.6,
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                          ...addPropertyOverrides2(
                            {
                              WQuTvhU4d: {
                                children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    style: {
                                      '--font-selector': 'R0Y7U3BhY2UgR3JvdGVzay1yZWd1bGFy',
                                      '--framer-font-family': '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                                      '--framer-line-height': '1.7em',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                                    },
                                    children: 'Inspect any Docker image size, we help you make them smaller, faster and safer.',
                                  },),
                                },),
                              },
                              z6EC3SumH: {
                                children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    style: {
                                      '--font-selector': 'R0Y7U3BhY2UgR3JvdGVzay1yZWd1bGFy',
                                      '--framer-font-family': '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                                      '--framer-line-height': '1.7em',
                                      '--framer-text-alignment': 'center',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                                    },
                                    children: 'Inspect any Docker image size, we help you make them smaller, faster and safer.',
                                  },),
                                },),
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(motion2.div, {
                      className: 'framer-fq4u89',
                      'data-framer-name': 'Social',
                      layoutDependency,
                      layoutId: 'FB8MZYNGv',
                      children: [
                        /* @__PURE__ */ _jsx2(RichText, {
                          __fromCanvasComponent: true,
                          children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                            children: /* @__PURE__ */ _jsx2(motion2.p, {
                              style: {
                                '--font-selector': 'R0Y7U3BhY2UgR3JvdGVzay01MDA=',
                                '--framer-font-family': '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                                '--framer-font-weight': '500',
                                '--framer-line-height': '1.7em',
                                '--framer-text-color':
                                  'var(--extracted-r6o4lv, var(--token-c46c0c2d-e53e-42e7-8f54-be852f62337f, rgb(224, 232, 210)))',
                              },
                              children: 'Connect with:',
                            },),
                          },),
                          className: 'framer-otbwed',
                          'data-framer-name': 'Connect with:',
                          fonts: ['GF;Space Grotesk-500',],
                          layoutDependency,
                          layoutId: 'd9So54u8a',
                          style: {
                            '--extracted-r6o4lv': 'var(--token-c46c0c2d-e53e-42e7-8f54-be852f62337f, rgb(224, 232, 210))',
                            '--framer-paragraph-spacing': '0px',
                          },
                          verticalAlignment: 'top',
                          withExternalLayout: true,
                        },),
                        /* @__PURE__ */ _jsx2(motion2.div, {
                          className: 'framer-lahofg',
                          'data-framer-name': 'Social Links',
                          layoutDependency,
                          layoutId: 'QkhGspGsD',
                          children: /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                            width: '24px',
                            children: /* @__PURE__ */ _jsx2(motion2.div, {
                              className: 'framer-1hz2cke-container',
                              layoutDependency,
                              layoutId: 'w4G7omkHR-container',
                              children: /* @__PURE__ */ _jsx2(stdin_default3, {
                                AtQ5PEj2x: 'https://twitter.com/__morse',
                                f6skm2rkz: 'twitter',
                                height: '100%',
                                id: 'w4G7omkHR',
                                layoutId: 'w4G7omkHR',
                                style: { height: '100%', width: '100%', },
                                width: '100%',
                              },),
                            },),
                          },),
                        },),
                      ],
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsxs(motion2.div, {
                  className: 'framer-8rub3v',
                  'data-framer-name': 'Texts',
                  layoutDependency,
                  layoutId: 'XNuLqxLIt',
                  children: [
                    /* @__PURE__ */ _jsxs(MotionDivWithFX, {
                      __framer__animate: { transition: transition3, },
                      __framer__animateOnce: true,
                      __framer__enter: animation,
                      __framer__styleAppearEffectEnabled: true,
                      __framer__threshold: 0.5,
                      __perspectiveFX: false,
                      __smartComponentFX: true,
                      __targetOpacity: 1,
                      className: 'framer-1sclpsf',
                      'data-framer-name': 'Linkes',
                      layoutDependency,
                      layoutId: 'fUB5faJ2P',
                      style: { transformPerspective: 1200, },
                      children: [
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'hpFTy1jNH', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'hpFTy1jNH', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'hpFTy1jNH', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'hpFTy1jNH', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-75mz9x-container',
                                layoutDependency,
                                layoutId: 'N7_dqeOeW-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks[0],
                                  height: '100%',
                                  id: 'N7_dqeOeW',
                                  layoutId: 'N7_dqeOeW',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'Features',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'XlOegJNQ6', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'XlOegJNQ6', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'XlOegJNQ6', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'XlOegJNQ6', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks1,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-9wp9ue-container',
                                layoutDependency,
                                layoutId: 'Lc7LC7col-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks1[0],
                                  height: '100%',
                                  id: 'Lc7LC7col',
                                  layoutId: 'Lc7LC7col',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'Solutions',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks1[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks1[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks1[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                        /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                          children: /* @__PURE__ */ _jsx2(motion2.div, {
                            className: 'framer-b5nwmk-container',
                            layoutDependency,
                            layoutId: 'o_e8EDh9J-container',
                            children: /* @__PURE__ */ _jsx2(stdin_default, {
                              height: '100%',
                              id: 'o_e8EDh9J',
                              layoutId: 'o_e8EDh9J',
                              Oc0fzh3x0: false,
                              okFfDCMAr: 'About',
                              width: '100%',
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'JMq506xGy', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'JMq506xGy', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'JMq506xGy', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'JMq506xGy', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks2,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-1tcimzo-container',
                                layoutDependency,
                                layoutId: 'H4Vt8Hy5y-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks2[0],
                                  height: '100%',
                                  id: 'H4Vt8Hy5y',
                                  layoutId: 'H4Vt8Hy5y',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'News',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks2[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks2[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks2[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(MotionDivWithFX, {
                      __framer__animate: { transition: transition4, },
                      __framer__animateOnce: true,
                      __framer__enter: animation,
                      __framer__styleAppearEffectEnabled: true,
                      __framer__threshold: 0.5,
                      __perspectiveFX: false,
                      __smartComponentFX: true,
                      __targetOpacity: 1,
                      className: 'framer-372lw9',
                      'data-framer-name': 'Linkes',
                      layoutDependency,
                      layoutId: 'bEEJzh5vI',
                      style: { transformPerspective: 1200, },
                      children: [
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks3,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-uqalbr-container',
                                layoutDependency,
                                layoutId: 'nVvZarhY0-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks3[0],
                                  height: '100%',
                                  id: 'nVvZarhY0',
                                  layoutId: 'nVvZarhY0',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'Contact Us',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks3[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks3[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks3[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'TcO6JuxeI', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'TcO6JuxeI', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'TcO6JuxeI', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'TcO6JuxeI', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks4,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-17r0yro-container',
                                layoutDependency,
                                layoutId: 'e9nH0vNTg-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks4[0],
                                  height: '100%',
                                  id: 'e9nH0vNTg',
                                  layoutId: 'e9nH0vNTg',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'FAQ\u2019s',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks4[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks4[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks4[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'rxSNjglB0', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'rxSNjglB0', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'rxSNjglB0', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'rxSNjglB0', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks5,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-1es41w8-container',
                                layoutDependency,
                                layoutId: 'E0OXdDkSF-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks5[0],
                                  height: '100%',
                                  id: 'E0OXdDkSF',
                                  layoutId: 'E0OXdDkSF',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'Terms & Conditions',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks5[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks5[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks5[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'BfLlmAcoP', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'BfLlmAcoP', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'BfLlmAcoP', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'BfLlmAcoP', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks6,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-b5njg4-container',
                                layoutDependency,
                                layoutId: 'yfXeGrsd0-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks6[0],
                                  height: '100%',
                                  id: 'yfXeGrsd0',
                                  layoutId: 'yfXeGrsd0',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'Privacy Policy',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks6[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks6[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks6[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs(MotionDivWithFX, {
                      __framer__animate: { transition: transition5, },
                      __framer__animateOnce: true,
                      __framer__enter: animation,
                      __framer__styleAppearEffectEnabled: true,
                      __framer__threshold: 0.5,
                      __perspectiveFX: false,
                      __smartComponentFX: true,
                      __targetOpacity: 1,
                      className: 'framer-1ghpf0v',
                      'data-framer-name': 'Linkes',
                      layoutDependency,
                      layoutId: 'AT0wOCRfh',
                      style: { transformPerspective: 1200, },
                      children: [
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'dby3YDn4c', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'dby3YDn4c', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'dby3YDn4c', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'dby3YDn4c', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks7,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-crzudh-container',
                                layoutDependency,
                                layoutId: 'buIEmFnr0-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks7[0],
                                  height: '100%',
                                  id: 'buIEmFnr0',
                                  layoutId: 'buIEmFnr0',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'ChangeLog',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks7[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks7[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks7[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                        /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                          children: /* @__PURE__ */ _jsx2(motion2.div, {
                            className: 'framer-c0fqh6-container',
                            layoutDependency,
                            layoutId: 'QmuI4bM3e-container',
                            children: /* @__PURE__ */ _jsx2(stdin_default, {
                              height: '100%',
                              id: 'QmuI4bM3e',
                              layoutId: 'QmuI4bM3e',
                              Oc0fzh3x0: false,
                              okFfDCMAr: 'Erorr 404 ',
                              width: '100%',
                            },),
                          },),
                        },),
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks8,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-f5ez88-container',
                                layoutDependency,
                                layoutId: 'CM7PbDd31-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks8[0],
                                  height: '100%',
                                  id: 'CM7PbDd31',
                                  layoutId: 'CM7PbDd31',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'Create Account',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks8[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks8[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks8[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                        /* @__PURE__ */ _jsx2(ResolveLinks, {
                          links: [
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                            { href: { webPageId: 'A2nW9HZFd', }, implicitPathVariables: void 0, },
                          ],
                          children: (resolvedLinks9,) =>
                            /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
                              children: /* @__PURE__ */ _jsx2(motion2.div, {
                                className: 'framer-1bvej01-container',
                                layoutDependency,
                                layoutId: 'AsUqcFthV-container',
                                children: /* @__PURE__ */ _jsx2(stdin_default, {
                                  cRqRWoih6: resolvedLinks9[0],
                                  height: '100%',
                                  id: 'AsUqcFthV',
                                  layoutId: 'AsUqcFthV',
                                  Oc0fzh3x0: false,
                                  okFfDCMAr: 'Login',
                                  width: '100%',
                                  ...addPropertyOverrides2(
                                    {
                                      jGxfdUJpH: { cRqRWoih6: resolvedLinks9[1], },
                                      WQuTvhU4d: { cRqRWoih6: resolvedLinks9[3], },
                                      z6EC3SumH: { cRqRWoih6: resolvedLinks9[2], },
                                    },
                                    baseVariant,
                                    gestureVariant,
                                  ),
                                },),
                              },),
                            },),
                        },),
                      ],
                    },),
                  ],
                },),
              ],
            },),
            /* @__PURE__ */ _jsxs(motion2.div, {
              className: 'framer-u5mc0j',
              'data-border': true,
              'data-framer-name': 'Bottom Content',
              layoutDependency,
              layoutId: 'K2IdjAy_u',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(255, 255, 255, 0.1)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
              },
              children: [
                /* @__PURE__ */ _jsx2(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                      style: {
                        '--font-selector': 'R0Y7U3BhY2UgR3JvdGVzay1yZWd1bGFy',
                        '--framer-font-family': '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                        '--framer-line-height': '1.7em',
                        '--framer-text-alignment': 'center',
                        '--framer-text-color':
                          'var(--extracted-r6o4lv, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                      },
                      children: '2024',
                    },),
                  },),
                  className: 'framer-1xfc08o',
                  'data-framer-name': '2024 \xA9 WebChain Copyright',
                  fonts: ['GF;Space Grotesk-regular',],
                  layoutDependency,
                  layoutId: 'RDrloeEFP',
                  style: {
                    '--extracted-r6o4lv': 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))',
                    '--framer-paragraph-spacing': '0px',
                  },
                  text: vJi5rlMqN,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ _jsx2(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                    children: /* @__PURE__ */ _jsx2(motion2.p, {
                      style: {
                        '--font-selector': 'R0Y7U3BhY2UgR3JvdGVzay1yZWd1bGFy',
                        '--framer-font-family': '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                        '--framer-line-height': '1.7em',
                        '--framer-text-alignment': 'center',
                        '--framer-text-color':
                          'var(--extracted-r6o4lv, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                      },
                      children: ' \xA9 DockerPhobia Copyright',
                    },),
                  },),
                  className: 'framer-1hpltbx',
                  'data-framer-name': '2024 \xA9 WebChain Copyright',
                  fonts: ['GF;Space Grotesk-regular',],
                  layoutDependency,
                  layoutId: 'jJa9DbDfE',
                  style: {
                    '--extracted-r6o4lv': 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))',
                    '--framer-paragraph-spacing': '0px',
                  },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-3NgdG.framer-2s7kq9, .framer-3NgdG .framer-2s7kq9 { display: block; }',
  '.framer-3NgdG.framer-1j13yy5 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 65px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1140px; }',
  '.framer-3NgdG .framer-1sf2iwh { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-3NgdG .framer-19sa18m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 32%; }',
  '.framer-3NgdG .framer-jniv1e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }',
  '.framer-3NgdG .framer-8lapr5-container, .framer-3NgdG .framer-75mz9x-container, .framer-3NgdG .framer-9wp9ue-container, .framer-3NgdG .framer-b5nwmk-container, .framer-3NgdG .framer-1tcimzo-container, .framer-3NgdG .framer-uqalbr-container, .framer-3NgdG .framer-17r0yro-container, .framer-3NgdG .framer-1es41w8-container, .framer-3NgdG .framer-b5njg4-container, .framer-3NgdG .framer-crzudh-container, .framer-3NgdG .framer-c0fqh6-container, .framer-3NgdG .framer-f5ez88-container, .framer-3NgdG .framer-1bvej01-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-3NgdG .framer-sfzc50 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-3NgdG .framer-fq4u89 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-3NgdG .framer-otbwed, .framer-3NgdG .framer-1xfc08o, .framer-3NgdG .framer-1hpltbx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-3NgdG .framer-lahofg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
  '.framer-3NgdG .framer-1hz2cke-container { flex: none; height: 24px; position: relative; width: 24px; }',
  '.framer-3NgdG .framer-8rub3v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 52%; }',
  '.framer-3NgdG .framer-1sclpsf, .framer-3NgdG .framer-372lw9, .framer-3NgdG .framer-1ghpf0v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-3NgdG .framer-u5mc0j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 31px 0px 35px 0px; position: relative; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3NgdG.framer-1j13yy5, .framer-3NgdG .framer-19sa18m, .framer-3NgdG .framer-jniv1e, .framer-3NgdG .framer-fq4u89, .framer-3NgdG .framer-lahofg, .framer-3NgdG .framer-1sclpsf, .framer-3NgdG .framer-372lw9, .framer-3NgdG .framer-1ghpf0v, .framer-3NgdG .framer-u5mc0j { gap: 0px; } .framer-3NgdG.framer-1j13yy5 > * { margin: 0px; margin-bottom: calc(65px / 2); margin-top: calc(65px / 2); } .framer-3NgdG.framer-1j13yy5 > :first-child, .framer-3NgdG .framer-19sa18m > :first-child, .framer-3NgdG .framer-jniv1e > :first-child, .framer-3NgdG .framer-fq4u89 > :first-child, .framer-3NgdG .framer-1sclpsf > :first-child, .framer-3NgdG .framer-372lw9 > :first-child, .framer-3NgdG .framer-1ghpf0v > :first-child { margin-top: 0px; } .framer-3NgdG.framer-1j13yy5 > :last-child, .framer-3NgdG .framer-19sa18m > :last-child, .framer-3NgdG .framer-jniv1e > :last-child, .framer-3NgdG .framer-fq4u89 > :last-child, .framer-3NgdG .framer-1sclpsf > :last-child, .framer-3NgdG .framer-372lw9 > :last-child, .framer-3NgdG .framer-1ghpf0v > :last-child { margin-bottom: 0px; } .framer-3NgdG .framer-19sa18m > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-3NgdG .framer-jniv1e > *, .framer-3NgdG .framer-1sclpsf > *, .framer-3NgdG .framer-372lw9 > *, .framer-3NgdG .framer-1ghpf0v > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-3NgdG .framer-fq4u89 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-3NgdG .framer-lahofg > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-3NgdG .framer-lahofg > :first-child, .framer-3NgdG .framer-u5mc0j > :first-child { margin-left: 0px; } .framer-3NgdG .framer-lahofg > :last-child, .framer-3NgdG .framer-u5mc0j > :last-child { margin-right: 0px; } .framer-3NgdG .framer-u5mc0j > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }',
  '.framer-3NgdG.framer-v-1ivad0m.framer-1j13yy5 { gap: 80px; width: 932px; }',
  '.framer-3NgdG.framer-v-1ivad0m .framer-8rub3v { width: 53%; }',
  '.framer-3NgdG.framer-v-1ivad0m .framer-u5mc0j { padding: 50px 0px 65px 0px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3NgdG.framer-v-1ivad0m.framer-1j13yy5 { gap: 0px; } .framer-3NgdG.framer-v-1ivad0m.framer-1j13yy5 > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-3NgdG.framer-v-1ivad0m.framer-1j13yy5 > :first-child { margin-top: 0px; } .framer-3NgdG.framer-v-1ivad0m.framer-1j13yy5 > :last-child { margin-bottom: 0px; } }',
  '.framer-3NgdG.framer-v-ju8sz3.framer-1j13yy5 { width: 708px; }',
  '.framer-3NgdG.framer-v-ju8sz3 .framer-1sf2iwh { flex-direction: column; gap: 60px; justify-content: center; }',
  '.framer-3NgdG.framer-v-ju8sz3 .framer-19sa18m, .framer-3NgdG.framer-v-4chavw .framer-19sa18m { align-content: center; align-items: center; gap: 40px; justify-content: center; width: 100%; }',
  '.framer-3NgdG.framer-v-ju8sz3 .framer-jniv1e, .framer-3NgdG.framer-v-4chavw .framer-jniv1e { align-content: center; align-items: center; }',
  '.framer-3NgdG.framer-v-ju8sz3 .framer-sfzc50 { width: 75%; }',
  '.framer-3NgdG.framer-v-ju8sz3 .framer-fq4u89, .framer-3NgdG.framer-v-4chavw .framer-fq4u89 { align-content: center; align-items: center; gap: 20px; }',
  '.framer-3NgdG.framer-v-ju8sz3 .framer-8rub3v { width: 100%; }',
  '.framer-3NgdG.framer-v-ju8sz3 .framer-1sclpsf, .framer-3NgdG.framer-v-ju8sz3 .framer-372lw9, .framer-3NgdG.framer-v-ju8sz3 .framer-1ghpf0v, .framer-3NgdG.framer-v-4chavw .framer-1sclpsf, .framer-3NgdG.framer-v-4chavw .framer-372lw9, .framer-3NgdG.framer-v-4chavw .framer-1ghpf0v { align-content: center; align-items: center; justify-content: center; }',
  '.framer-3NgdG.framer-v-ju8sz3 .framer-u5mc0j { padding: 40px 0px 40px 0px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3NgdG.framer-v-ju8sz3 .framer-1sf2iwh, .framer-3NgdG.framer-v-ju8sz3 .framer-19sa18m, .framer-3NgdG.framer-v-ju8sz3 .framer-fq4u89 { gap: 0px; } .framer-3NgdG.framer-v-ju8sz3 .framer-1sf2iwh > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-3NgdG.framer-v-ju8sz3 .framer-1sf2iwh > :first-child, .framer-3NgdG.framer-v-ju8sz3 .framer-19sa18m > :first-child, .framer-3NgdG.framer-v-ju8sz3 .framer-fq4u89 > :first-child { margin-top: 0px; } .framer-3NgdG.framer-v-ju8sz3 .framer-1sf2iwh > :last-child, .framer-3NgdG.framer-v-ju8sz3 .framer-19sa18m > :last-child, .framer-3NgdG.framer-v-ju8sz3 .framer-fq4u89 > :last-child { margin-bottom: 0px; } .framer-3NgdG.framer-v-ju8sz3 .framer-19sa18m > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-3NgdG.framer-v-ju8sz3 .framer-fq4u89 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }',
  '.framer-3NgdG.framer-v-4chavw.framer-1j13yy5 { gap: 50px; width: 350px; }',
  '.framer-3NgdG.framer-v-4chavw .framer-1sf2iwh { flex-direction: column; gap: 35px; justify-content: center; }',
  '.framer-3NgdG.framer-v-4chavw .framer-8rub3v { align-content: center; align-items: center; flex-direction: column; gap: 30px; justify-content: center; width: 100%; }',
  '.framer-3NgdG.framer-v-4chavw .framer-u5mc0j { padding: 30px 0px 30px 0px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3NgdG.framer-v-4chavw.framer-1j13yy5, .framer-3NgdG.framer-v-4chavw .framer-1sf2iwh, .framer-3NgdG.framer-v-4chavw .framer-19sa18m, .framer-3NgdG.framer-v-4chavw .framer-fq4u89, .framer-3NgdG.framer-v-4chavw .framer-8rub3v { gap: 0px; } .framer-3NgdG.framer-v-4chavw.framer-1j13yy5 > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-3NgdG.framer-v-4chavw.framer-1j13yy5 > :first-child, .framer-3NgdG.framer-v-4chavw .framer-1sf2iwh > :first-child, .framer-3NgdG.framer-v-4chavw .framer-19sa18m > :first-child, .framer-3NgdG.framer-v-4chavw .framer-fq4u89 > :first-child, .framer-3NgdG.framer-v-4chavw .framer-8rub3v > :first-child { margin-top: 0px; } .framer-3NgdG.framer-v-4chavw.framer-1j13yy5 > :last-child, .framer-3NgdG.framer-v-4chavw .framer-1sf2iwh > :last-child, .framer-3NgdG.framer-v-4chavw .framer-19sa18m > :last-child, .framer-3NgdG.framer-v-4chavw .framer-fq4u89 > :last-child, .framer-3NgdG.framer-v-4chavw .framer-8rub3v > :last-child { margin-bottom: 0px; } .framer-3NgdG.framer-v-4chavw .framer-1sf2iwh > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } .framer-3NgdG.framer-v-4chavw .framer-19sa18m > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-3NgdG.framer-v-4chavw .framer-fq4u89 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-3NgdG.framer-v-4chavw .framer-8rub3v > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } }',
  '.framer-3NgdG[data-border="true"]::after, .framer-3NgdG [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var Framere4TNFUMUz = withCSS2(Component2, css2, 'framer-3NgdG',);
var stdin_default4 = Framere4TNFUMUz;
Framere4TNFUMUz.displayName = 'Footer';
Framere4TNFUMUz.defaultProps = { height: 359, width: 1140, };
addPropertyControls2(Framere4TNFUMUz, {
  variant: {
    options: ['JW3kIbJYM', 'jGxfdUJpH', 'z6EC3SumH', 'WQuTvhU4d',],
    optionTitles: ['Desktop', 'Laptop', 'Tablet', 'Mobile',],
    title: 'Variant',
    type: ControlType2.Enum,
  },
  vJi5rlMqN: { defaultValue: '2024', displayTextArea: false, title: 'currentYear', type: ControlType2.String, },
},);
addFonts2(Framere4TNFUMUz, [
  {
    explicitInter: true,
    fonts: [{
      family: 'Space Grotesk',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUUsmNsFjTDJK.woff2',
      weight: '400',
    }, {
      family: 'Space Grotesk',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUUsmNsFjTDJK.woff2',
      weight: '500',
    },],
  },
  ...LogoFonts,
  ...SocialIconFonts,
  ...NavItemFonts,
], { supportsExplicitInterCodegen: true, },);

// virtual:footer
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default4.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default4, ...props, },);
};
var footer_default = stdin_default4;
export { footer_default as default, };
