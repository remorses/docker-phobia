/* eslint-disable */
'use client';
import { className, css, fonts, Icon, stdin_default, stdin_default2, } from './chunk-HJZEKVSZ.js';

// https :https://framerusercontent.com/modules/v35u5dd2lSP2Ie8O8kut/g7M0rVQtXm0co9sclN9w/jAr6E0kPc.js
import { jsx as _jsx3, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls3,
  ComponentViewportProvider as ComponentViewportProvider3,
  ControlType as ControlType3,
  cx as cx3,
  getFonts as getFonts3,
  useActiveVariantCallback as useActiveVariantCallback2,
  useComponentViewport as useComponentViewport3,
  useLocaleInfo as useLocaleInfo3,
  useVariantState as useVariantState3,
  withCSS as withCSS3,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3, } from 'unframer';
import * as React3 from 'react';

// https :https://framerusercontent.com/modules/bB0biUaiQyPLYVvd9nIy/gEnhxoygtFxPWCDzCRgP/n_DVZNexF.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  Link,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';

// https :https://framerusercontent.com/modules/PunbTAM0YOoCAxOb0Z6w/lJnVHZiW49Phqk9vljQr/dNJjz5Q4p.js
import { fontStore, } from 'unframer';
fontStore.loadFonts(['GF;Space Grotesk-700',],);
var fonts2 = [{
  family: 'Space Grotesk',
  source: 'google',
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksmNsFjTDJK.woff2',
  weight: '700',
},];
var css2 = [
  '.framer-B4h90 .framer-styles-preset-1dpymlu:not(.rich-text-wrapper), .framer-B4h90 .framer-styles-preset-1dpymlu.rich-text-wrapper p { --framer-font-family: "Space Grotesk", "Space Grotesk Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.7em; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-c46c0c2d-e53e-42e7-8f54-be852f62337f, #e0e8d2); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className2 = 'framer-B4h90';

// https :https://framerusercontent.com/modules/bB0biUaiQyPLYVvd9nIy/gEnhxoygtFxPWCDzCRgP/n_DVZNexF.js
var FeatherFonts = getFonts(Icon,);
var enabledGestures = {
  B3GNqKG_s: { hover: true, },
  BkIMK8jhq: { hover: true, },
  HpACQO_27: { hover: true, },
  ia7uVki50: { hover: true, },
  Ny0_HBScj: { hover: true, },
};
var cycleOrder = ['ia7uVki50', 'Ny0_HBScj', 'HpACQO_27', 'BkIMK8jhq', 'B3GNqKG_s',];
var serializationHash = 'framer-nyuCL';
var variantClassNames = {
  B3GNqKG_s: 'framer-v-vxw3cn',
  BkIMK8jhq: 'framer-v-it02uf',
  HpACQO_27: 'framer-v-5n4rj3',
  ia7uVki50: 'framer-v-16c9l7d',
  Ny0_HBScj: 'framer-v-1ik2naf',
};
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
var humanReadableVariantMap = {
  ' Login button': 'BkIMK8jhq',
  'Button text': 'B3GNqKG_s',
  Primary: 'ia7uVki50',
  Secondary: 'Ny0_HBScj',
  Tertiary: 'HpACQO_27',
};
var getProps = ({ buttonTitle, height, iconVisibility, id, link, width, ...props },) => {
  var _ref, _ref1, _humanReadableVariantMap_props_variant, _ref2;
  return {
    ...props,
    c0gn5OQjt: (_ref = buttonTitle !== null && buttonTitle !== void 0 ? buttonTitle : props.c0gn5OQjt) !== null && _ref !== void 0
      ? _ref
      : 'Create Free Account',
    FDhu5wZJE: link !== null && link !== void 0 ? link : props.FDhu5wZJE,
    qyxXbxBX2:
      (_ref1 = iconVisibility !== null && iconVisibility !== void 0 ? iconVisibility : props.qyxXbxBX2) !== null && _ref1 !== void 0
        ? _ref1
        : true,
    variant:
      (_ref2 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref2 !== void 0
        ? _ref2
        : 'ia7uVki50',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, c0gn5OQjt, qyxXbxBX2, FDhu5wZJE, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'ia7uVki50',
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2, className,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx(Link, {
          href: FDhu5wZJE,
          children: /* @__PURE__ */ _jsxs(motion.a, {
            ...restProps,
            className: `${cx(serializationHash, ...sharedStyleClassNames, 'framer-16c9l7d', className3, classNames,)} framer-e7qqvm`,
            'data-border': true,
            'data-framer-name': 'Primary',
            layoutDependency,
            layoutId: 'ia7uVki50',
            onHoverEnd: () => setGestureState({ isHovered: false, },),
            onHoverStart: () => setGestureState({ isHovered: true, },),
            onTap: () => setGestureState({ isPressed: false, },),
            onTapCancel: () => setGestureState({ isPressed: false, },),
            onTapStart: () => setGestureState({ isPressed: true, },),
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: {
              '--border-bottom-width': '1px',
              '--border-color': 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86)) /* {"name":"Theme Color 01"} */',
              '--border-left-width': '1px',
              '--border-right-width': '1px',
              '--border-style': 'solid',
              '--border-top-width': '1px',
              backgroundColor: 'rgb(11, 11, 11)',
              borderBottomLeftRadius: 58,
              borderBottomRightRadius: 58,
              borderTopLeftRadius: 58,
              borderTopRightRadius: 58,
              ...style,
            },
            variants: {
              'B3GNqKG_s-hover': {
                '--border-bottom-width': '0px',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-top-width': '0px',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              'BkIMK8jhq-hover': {
                '--border-bottom-width': '0px',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-top-width': '0px',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              'HpACQO_27-hover': {
                '--border-bottom-width': '0px',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-top-width': '0px',
                backgroundColor: 'rgba(193, 255, 86, 0.7)',
              },
              'ia7uVki50-hover': { '--border-color': 'rgba(193, 255, 86, 0.7)', },
              'Ny0_HBScj-hover': { '--border-color': 'rgba(193, 255, 86, 0.7)', },
              B3GNqKG_s: {
                '--border-bottom-width': '0px',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-top-width': '0px',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              BkIMK8jhq: {
                '--border-bottom-width': '0px',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-top-width': '0px',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
              },
              HpACQO_27: {
                '--border-bottom-width': '0px',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-top-width': '0px',
                backgroundColor: 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86))',
              },
            },
            ...addPropertyOverrides(
              {
                'B3GNqKG_s-hover': { 'data-framer-name': void 0, },
                'BkIMK8jhq-hover': { 'data-framer-name': void 0, },
                'HpACQO_27-hover': { 'data-framer-name': void 0, },
                'ia7uVki50-hover': { 'data-framer-name': void 0, },
                'Ny0_HBScj-hover': { 'data-framer-name': void 0, },
                B3GNqKG_s: { 'data-framer-name': 'Button text', },
                BkIMK8jhq: { 'data-framer-name': ' Login button', },
                HpACQO_27: { 'data-framer-name': 'Tertiary', },
                Ny0_HBScj: { 'data-framer-name': 'Secondary', },
              },
              baseVariant,
              gestureVariant,
            ),
            children: [
              /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    className: 'framer-styles-preset-1dpymlu',
                    'data-styles-preset': 'dNJjz5Q4p',
                    style: {
                      '--framer-text-color':
                        'var(--extracted-r6o4lv, var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86)))',
                    },
                    children: 'Create Free Account',
                  },),
                },),
                className: 'framer-1x0zoee',
                'data-framer-name': 'Get Started Now',
                layoutDependency,
                layoutId: 'I10802:4495;10706:1364',
                style: {
                  '--extracted-r6o4lv': 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86))',
                  '--framer-paragraph-spacing': '0px',
                },
                text: c0gn5OQjt,
                variants: {
                  'B3GNqKG_s-hover': { '--extracted-r6o4lv': 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))', },
                  'BkIMK8jhq-hover': { '--extracted-r6o4lv': 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86))', },
                  'HpACQO_27-hover': { '--extracted-r6o4lv': 'rgb(8, 8, 7)', },
                  'ia7uVki50-hover': { '--extracted-r6o4lv': 'rgba(193, 255, 86, 0.7)', },
                  'Ny0_HBScj-hover': { '--extracted-r6o4lv': 'rgba(193, 255, 86, 0.7)', },
                  BkIMK8jhq: { '--extracted-r6o4lv': 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))', },
                  HpACQO_27: { '--extracted-r6o4lv': 'var(--token-ff9d48bd-ec1e-45fc-b308-fcfb34b4089f, rgb(8, 8, 7))', },
                },
                verticalAlignment: 'center',
                withExternalLayout: true,
                ...addPropertyOverrides(
                  {
                    'B3GNqKG_s-hover': {
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          className: 'framer-styles-preset-1dpymlu',
                          'data-styles-preset': 'dNJjz5Q4p',
                          style: {
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                          },
                          children: 'Create Free Account',
                        },),
                      },),
                    },
                    'BkIMK8jhq-hover': {
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          className: 'framer-styles-preset-17ww93c',
                          'data-styles-preset': 'uMdppUE31',
                          style: {
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86)))',
                          },
                          children: 'Create Free Account',
                        },),
                      },),
                    },
                    'HpACQO_27-hover': {
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          className: 'framer-styles-preset-1dpymlu',
                          'data-styles-preset': 'dNJjz5Q4p',
                          style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(8, 8, 7))', },
                          children: 'Create Free Account',
                        },),
                      },),
                    },
                    'ia7uVki50-hover': {
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          className: 'framer-styles-preset-1dpymlu',
                          'data-styles-preset': 'dNJjz5Q4p',
                          style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgba(193, 255, 86, 0.7))', },
                          children: 'Create Free Account',
                        },),
                      },),
                    },
                    'Ny0_HBScj-hover': {
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          className: 'framer-styles-preset-1dpymlu',
                          'data-styles-preset': 'dNJjz5Q4p',
                          style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgba(193, 255, 86, 0.7))', },
                          children: 'Create Free Account',
                        },),
                      },),
                    },
                    BkIMK8jhq: {
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          className: 'framer-styles-preset-17ww93c',
                          'data-styles-preset': 'uMdppUE31',
                          style: {
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                          },
                          children: 'Create Free Account',
                        },),
                      },),
                    },
                    HpACQO_27: {
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
                          className: 'framer-styles-preset-1dpymlu',
                          'data-styles-preset': 'dNJjz5Q4p',
                          style: {
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-ff9d48bd-ec1e-45fc-b308-fcfb34b4089f, rgb(8, 8, 7)))',
                          },
                          children: 'Create Free Account',
                        },),
                      },),
                    },
                  },
                  baseVariant,
                  gestureVariant,
                ),
              },),
              qyxXbxBX2 && /* @__PURE__ */ _jsxs(motion.div, {
                className: 'framer-bvy246',
                'data-framer-name': 'Icon',
                layoutDependency,
                layoutId: 'I10802:4495;10706:1365',
                children: [
                  /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                    children: /* @__PURE__ */ _jsx(motion.div, {
                      className: 'framer-g861do-container',
                      'data-framer-name': 'Arrow-right',
                      layoutDependency,
                      layoutId: 'Tq68oXgPW-container',
                      name: 'Arrow-right',
                      children: /* @__PURE__ */ _jsx(Icon, {
                        color: 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86))',
                        height: '100%',
                        iconSearch: 'Home',
                        iconSelection: 'arrow-right',
                        id: 'Tq68oXgPW',
                        layoutId: 'Tq68oXgPW',
                        mirrored: false,
                        name: 'Arrow-right',
                        selectByList: true,
                        style: { height: '100%', width: '100%', },
                        width: '100%',
                        ...addPropertyOverrides(
                          {
                            'B3GNqKG_s-hover': { color: 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))', },
                            'BkIMK8jhq-hover': { color: 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86))', },
                            'ia7uVki50-hover': { color: 'rgba(193, 255, 86, 0.7)', },
                            'Ny0_HBScj-hover': { color: 'rgba(193, 255, 86, 0.7)', },
                            BkIMK8jhq: { color: 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))', },
                            HpACQO_27: { color: 'var(--token-ff9d48bd-ec1e-45fc-b308-fcfb34b4089f, rgb(8, 8, 7))', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                    children: /* @__PURE__ */ _jsx(motion.div, {
                      className: 'framer-17dk01k-container',
                      'data-framer-name': 'Arrow-right',
                      layoutDependency,
                      layoutId: 'UcMyTf8p_-container',
                      name: 'Arrow-right',
                      children: /* @__PURE__ */ _jsx(Icon, {
                        color: 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86))',
                        height: '100%',
                        iconSearch: 'Home',
                        iconSelection: 'arrow-right',
                        id: 'UcMyTf8p_',
                        layoutId: 'UcMyTf8p_',
                        mirrored: false,
                        name: 'Arrow-right',
                        selectByList: true,
                        style: { height: '100%', width: '100%', },
                        width: '100%',
                        ...addPropertyOverrides(
                          {
                            'B3GNqKG_s-hover': { color: 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))', },
                            'BkIMK8jhq-hover': { color: 'var(--token-a05655a1-e6dd-4d69-a82a-f5054b601f79, rgb(193, 255, 86))', },
                            'ia7uVki50-hover': { color: 'rgba(193, 255, 86, 0.7)', },
                            'Ny0_HBScj-hover': { color: 'rgba(193, 255, 86, 0.7)', },
                            BkIMK8jhq: { color: 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))', },
                            HpACQO_27: { color: 'var(--token-ff9d48bd-ec1e-45fc-b308-fcfb34b4089f, rgb(8, 8, 7))', },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                ],
              },),
            ],
          },),
        },),
      },),
    },),
  },);
},);
var css3 = [
  '.framer-nyuCL[data-border="true"]::after, .framer-nyuCL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-nyuCL.framer-e7qqvm, .framer-nyuCL .framer-e7qqvm { display: block; }',
  '.framer-nyuCL.framer-16c9l7d { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 7px 24px 7px 24px; position: relative; text-decoration: none; width: min-content; }',
  '.framer-nyuCL .framer-1x0zoee { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-nyuCL .framer-bvy246 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: var(--framer-aspect-ratio-supported, 16px); justify-content: flex-end; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 16px; }',
  '.framer-nyuCL .framer-g861do-container, .framer-nyuCL .framer-17dk01k-container { flex: none; height: 16px; position: relative; width: 16px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-nyuCL.framer-16c9l7d, .framer-nyuCL .framer-bvy246 { gap: 0px; } .framer-nyuCL.framer-16c9l7d > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-nyuCL.framer-16c9l7d > :first-child, .framer-nyuCL .framer-bvy246 > :first-child { margin-left: 0px; } .framer-nyuCL.framer-16c9l7d > :last-child, .framer-nyuCL .framer-bvy246 > :last-child { margin-right: 0px; } .framer-nyuCL .framer-bvy246 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }',
  '.framer-nyuCL.framer-v-1ik2naf.framer-16c9l7d, .framer-nyuCL.framer-v-5n4rj3.framer-16c9l7d { padding: 14px 24px 14px 24px; }',
  '.framer-nyuCL.framer-v-it02uf.framer-16c9l7d, .framer-nyuCL.framer-v-vxw3cn.framer-16c9l7d { padding: 0px 0px 0px 0px; }',
  '.framer-nyuCL.framer-v-16c9l7d.hover .framer-bvy246, .framer-nyuCL.framer-v-1ik2naf.hover .framer-bvy246, .framer-nyuCL.framer-v-5n4rj3.hover .framer-bvy246, .framer-nyuCL.framer-v-it02uf.hover .framer-bvy246, .framer-nyuCL.framer-v-vxw3cn.hover .framer-bvy246 { justify-content: flex-start; }',
  ...css2,
  ...css,
];
var Framern_DVZNexF = withCSS(Component, css3, 'framer-nyuCL',);
var stdin_default3 = Framern_DVZNexF;
Framern_DVZNexF.displayName = 'Button';
Framern_DVZNexF.defaultProps = { height: 41, width: 237, };
addPropertyControls(Framern_DVZNexF, {
  variant: {
    options: ['ia7uVki50', 'Ny0_HBScj', 'HpACQO_27', 'BkIMK8jhq', 'B3GNqKG_s',],
    optionTitles: ['Primary', 'Secondary', 'Tertiary', ' Login button', 'Button text',],
    title: 'Variant',
    type: ControlType.Enum,
  },
  c0gn5OQjt: { defaultValue: 'Create Free Account', displayTextArea: false, title: 'Button Title', type: ControlType.String, },
  qyxXbxBX2: { defaultValue: true, title: 'Icon Visibility', type: ControlType.Boolean, },
  FDhu5wZJE: { title: 'Link', type: ControlType.Link, },
},);
addFonts(Framern_DVZNexF, [...FeatherFonts, ...fonts2, ...fonts,],);

// https :https://framerusercontent.com/modules/dIXoyGHlAhBtcbDyh1q8/9wfQBj1nDiWXPpTHHiVG/KcSL_pfvh.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider as ComponentViewportProvider2,
  ControlType as ControlType2,
  cx as cx2,
  getFonts as getFonts2,
  useActiveVariantCallback,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';
var FeatherFonts2 = getFonts2(Icon,);
var cycleOrder2 = ['iAP2FH3x9', 'IDm9Bjzb4',];
var serializationHash2 = 'framer-AIwoe';
var variantClassNames2 = { iAP2FH3x9: 'framer-v-1ri84p4', IDm9Bjzb4: 'framer-v-dimqrm', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions2 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React2.Fragment,);
var humanReadableVariantMap2 = { Humburger: 'iAP2FH3x9', x: 'IDm9Bjzb4', };
var getProps2 = ({ height, id, tap, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    njNJdZBy3: tap !== null && tap !== void 0 ? tap : props.njNJdZBy3,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'iAP2FH3x9',
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className: className3, layoutId, variant, njNJdZBy3, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'iAP2FH3x9',
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap1vty52i = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    if (njNJdZBy3) {
      const res = await njNJdZBy3(...args,);
      if (res === false) return false;
    }
  },);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition2, {
        value: transition,
        children: /* @__PURE__ */ _jsx2(motion2.div, {
          ...restProps,
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-1ri84p4', className3, classNames,),
          'data-framer-name': 'Humburger',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'iAP2FH3x9',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: onTap1vty52i,
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides2({ IDm9Bjzb4: { 'data-framer-name': 'x', }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx2(ComponentViewportProvider2, {
            children: /* @__PURE__ */ _jsx2(motion2.div, {
              className: 'framer-1tu957g-container',
              layoutDependency,
              layoutId: 'tCFR1Cqhd-container',
              children: /* @__PURE__ */ _jsx2(Icon, {
                color: 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))',
                height: '100%',
                iconSearch: 'Home',
                iconSelection: 'menu',
                id: 'tCFR1Cqhd',
                layoutId: 'tCFR1Cqhd',
                mirrored: false,
                selectByList: true,
                style: { height: '100%', width: '100%', },
                width: '100%',
                ...addPropertyOverrides2({ IDm9Bjzb4: { iconSelection: 'x', }, }, baseVariant, gestureVariant,),
              },),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css4 = [
  '.framer-AIwoe[data-border="true"]::after, .framer-AIwoe [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-AIwoe.framer-12zeeso, .framer-AIwoe .framer-12zeeso { display: block; }',
  '.framer-AIwoe.framer-1ri84p4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 30px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 30px; }',
  '.framer-AIwoe .framer-1tu957g-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-AIwoe.framer-1ri84p4 { gap: 0px; } .framer-AIwoe.framer-1ri84p4 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-AIwoe.framer-1ri84p4 > :first-child { margin-left: 0px; } .framer-AIwoe.framer-1ri84p4 > :last-child { margin-right: 0px; } }',
];
var FramerKcSL_pfvh = withCSS2(Component2, css4, 'framer-AIwoe',);
var stdin_default4 = FramerKcSL_pfvh;
FramerKcSL_pfvh.displayName = 'Humburger';
FramerKcSL_pfvh.defaultProps = { height: 30, width: 30, };
addPropertyControls2(FramerKcSL_pfvh, {
  variant: { options: ['iAP2FH3x9', 'IDm9Bjzb4',], optionTitles: ['Humburger', 'x',], title: 'Variant', type: ControlType2.Enum, },
  njNJdZBy3: { title: 'Tap', type: ControlType2.EventHandler, },
},);
addFonts2(FramerKcSL_pfvh, [...FeatherFonts2,],);

// https :https://framerusercontent.com/modules/v35u5dd2lSP2Ie8O8kut/g7M0rVQtXm0co9sclN9w/jAr6E0kPc.js
var LogoFonts = getFonts3(stdin_default2,);
var ButtonFonts = getFonts3(stdin_default3,);
var HumburgerFonts = getFonts3(stdin_default4,);
var NavItemFonts = getFonts3(stdin_default,);
var cycleOrder3 = ['AdaLR3nqj', 'vPpJ6IFPn', 'maNPgvx7O', 'nCRz2Hejg', 'b6MmRBhMj', 'ypYC11pFU',];
var serializationHash3 = 'framer-eFMUO';
var variantClassNames3 = {
  AdaLR3nqj: 'framer-v-20v9o',
  b6MmRBhMj: 'framer-v-19jbhga',
  maNPgvx7O: 'framer-v-1nuk8pz',
  nCRz2Hejg: 'framer-v-nixar0',
  vPpJ6IFPn: 'framer-v-1ifus9o',
  ypYC11pFU: 'framer-v-gqa7es',
};
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var transformTemplate1 = (_, t,) => `translate(-50%, -50%) ${t}`;
var Transition3 = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var Variants3 = motion3(React3.Fragment,);
var humanReadableVariantMap3 = {
  'Mobile Open': 'ypYC11pFU',
  'Tablet Open': 'b6MmRBhMj',
  Desktop: 'AdaLR3nqj',
  Laptop: 'vPpJ6IFPn',
  Mobile: 'nCRz2Hejg',
  Tablet: 'maNPgvx7O',
};
var getProps3 = ({ crispPlugin, height, id, raycastUrl, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    J_QbTJlEC: crispPlugin !== null && crispPlugin !== void 0 ? crispPlugin : props.J_QbTJlEC,
    sCRIQGxNC: raycastUrl !== null && raycastUrl !== void 0 ? raycastUrl : props.sCRIQGxNC,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'AdaLR3nqj',
  };
};
var createLayoutDependency3 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo3();
  const { style, className: className3, layoutId, variant, sCRIQGxNC, J_QbTJlEC, ...restProps } = getProps3(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'AdaLR3nqj',
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const njNJdZBy3pe0mbv = activeVariantCallback(async (...args) => {
    setVariant('b6MmRBhMj',);
  },);
  const njNJdZBy35ca9n6 = activeVariantCallback(async (...args) => {
    setVariant('ypYC11pFU',);
  },);
  const njNJdZBy315m2sdq = activeVariantCallback(async (...args) => {
    setVariant('maNPgvx7O',);
  },);
  const njNJdZBy3of2c2x = activeVariantCallback(async (...args) => {
    setVariant('nCRz2Hejg',);
  },);
  const ref1 = React3.useRef(null,);
  const isDisplayed = () => {
    if (['maNPgvx7O', 'nCRz2Hejg', 'b6MmRBhMj', 'ypYC11pFU',].includes(baseVariant,)) return true;
    return false;
  };
  const isDisplayed1 = () => {
    if (['maNPgvx7O', 'nCRz2Hejg', 'b6MmRBhMj', 'ypYC11pFU',].includes(baseVariant,)) return false;
    return true;
  };
  const isDisplayed2 = () => {
    if (['maNPgvx7O', 'nCRz2Hejg',].includes(baseVariant,)) return false;
    return true;
  };
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport3();
  return /* @__PURE__ */ _jsx3(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants3, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition3, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs2(motion3.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx3(serializationHash3, ...sharedStyleClassNames, 'framer-20v9o', className3, classNames,),
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'AdaLR3nqj',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides3(
            {
              b6MmRBhMj: { 'data-framer-name': 'Tablet Open', },
              maNPgvx7O: { 'data-framer-name': 'Tablet', },
              nCRz2Hejg: { 'data-framer-name': 'Mobile', },
              vPpJ6IFPn: { 'data-framer-name': 'Laptop', },
              ypYC11pFU: { 'data-framer-name': 'Mobile Open', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-izyxzw',
              'data-framer-name': 'Brand Logo',
              layoutDependency,
              layoutId: 'AubY9lIaC',
              children: [
                /* @__PURE__ */ _jsx3(ComponentViewportProvider3, {
                  children: /* @__PURE__ */ _jsx3(motion3.div, {
                    className: 'framer-1dhq8d4-container',
                    layoutDependency,
                    layoutId: 'wFDS8i6Rv-container',
                    transformTemplate: transformTemplate1,
                    children: /* @__PURE__ */ _jsx3(stdin_default2, {
                      height: '100%',
                      id: 'wFDS8i6Rv',
                      layoutId: 'wFDS8i6Rv',
                      variant: 'Rn9w0YeZq',
                      width: '100%',
                    },),
                  },),
                },),
                isDisplayed() && /* @__PURE__ */ _jsxs2(motion3.div, {
                  className: 'framer-1oltp4q',
                  'data-framer-name': 'Button & Burger',
                  layoutDependency,
                  layoutId: 'LN7BplRoH',
                  style: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8, },
                  children: [
                    isDisplayed1() && /* @__PURE__ */ _jsx3(ComponentViewportProvider3, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-pstcz7-container',
                        layoutDependency,
                        layoutId: 'PVbiBgYs5-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default3, {
                          c0gn5OQjt: 'Create Free Account',
                          height: '100%',
                          id: 'PVbiBgYs5',
                          layoutId: 'PVbiBgYs5',
                          qyxXbxBX2: true,
                          variant: 'ia7uVki50',
                          width: '100%',
                        },),
                      },),
                    },),
                    isDisplayed() && /* @__PURE__ */ _jsx3(ComponentViewportProvider3, {
                      ...addPropertyOverrides3(
                        {
                          b6MmRBhMj: { width: '30px', },
                          maNPgvx7O: { width: '30px', },
                          nCRz2Hejg: { width: '30px', },
                          ypYC11pFU: { width: '30px', },
                        },
                        baseVariant,
                        gestureVariant,
                      ),
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-2tddqs-container',
                        layoutDependency,
                        layoutId: 'cLZpOScAv-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default4, {
                          height: '100%',
                          id: 'cLZpOScAv',
                          layoutId: 'cLZpOScAv',
                          style: { height: '100%', width: '100%', },
                          variant: 'iAP2FH3x9',
                          width: '100%',
                          ...addPropertyOverrides3(
                            {
                              b6MmRBhMj: { njNJdZBy3: njNJdZBy315m2sdq, variant: 'IDm9Bjzb4', },
                              maNPgvx7O: { njNJdZBy3: njNJdZBy3pe0mbv, },
                              nCRz2Hejg: { njNJdZBy3: njNJdZBy35ca9n6, },
                              ypYC11pFU: { njNJdZBy3: njNJdZBy3of2c2x, variant: 'IDm9Bjzb4', },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                        },),
                      },),
                    },),
                  ],
                },),
              ],
            },),
            isDisplayed2() && /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-19wyruc',
              'data-framer-name': 'Menu',
              layoutDependency,
              layoutId: 'eldmmTkhp',
              style: { backgroundColor: 'rgba(25, 23, 30, 0)', },
              variants: {
                b6MmRBhMj: { backgroundColor: 'var(--token-4bd7eeba-669e-49ab-85d5-91da45add9b3, rgb(21, 21, 20))', },
                ypYC11pFU: { backgroundColor: 'var(--token-4bd7eeba-669e-49ab-85d5-91da45add9b3, rgb(21, 21, 20))', },
              },
              children: [
                /* @__PURE__ */ _jsx3(ComponentViewportProvider3, {
                  children: /* @__PURE__ */ _jsx3(motion3.div, {
                    className: 'framer-ybhqfn-container',
                    layoutDependency,
                    layoutId: 'p2UGo6eU6-container',
                    children: /* @__PURE__ */ _jsx3(stdin_default, {
                      cRqRWoih6: sCRIQGxNC,
                      height: '100%',
                      id: 'p2UGo6eU6',
                      layoutId: 'p2UGo6eU6',
                      Oc0fzh3x0: false,
                      okFfDCMAr: 'Raycast Extension',
                      width: '100%',
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsx3(ComponentViewportProvider3, {
                  children: /* @__PURE__ */ _jsx3(motion3.div, {
                    className: 'framer-1xw5b3y-container',
                    layoutDependency,
                    layoutId: 'mS_0PgrAs-container',
                    children: /* @__PURE__ */ _jsx3(stdin_default, {
                      cRqRWoih6: J_QbTJlEC,
                      height: '100%',
                      id: 'mS_0PgrAs',
                      layoutId: 'mS_0PgrAs',
                      Oc0fzh3x0: false,
                      okFfDCMAr: 'Crisp Plugin',
                      width: '100%',
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsx3(ComponentViewportProvider3, {
                  children: /* @__PURE__ */ _jsx3(motion3.div, {
                    className: 'framer-183wtty-container',
                    layoutDependency,
                    layoutId: 'Y1zcTVYXH-container',
                    children: /* @__PURE__ */ _jsx3(stdin_default, {
                      cRqRWoih6: 'mailto:tommy@holocron.so',
                      height: '100%',
                      id: 'Y1zcTVYXH',
                      layoutId: 'Y1zcTVYXH',
                      Oc0fzh3x0: false,
                      okFfDCMAr: 'Contact',
                      width: '100%',
                    },),
                  },),
                },),
              ],
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx3(motion3.div, {
              className: 'framer-1az6rrr',
              'data-framer-name': 'Button & Burger',
              layoutDependency,
              layoutId: 'D09tGrzmK',
              style: { borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8, },
              children: /* @__PURE__ */ _jsx3(motion3.div, { className: 'framer-11hxu5b', layoutDependency, layoutId: 'wuzagR5ZY', },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css5 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-eFMUO.framer-dlotow, .framer-eFMUO .framer-dlotow { display: block; }',
  '.framer-eFMUO.framer-20v9o { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 22px 0px 22px 0px; position: relative; width: 1296px; }',
  '.framer-eFMUO .framer-izyxzw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 36px; min-width: 177px; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-eFMUO .framer-1dhq8d4-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; z-index: 1; }',
  '.framer-eFMUO .framer-1oltp4q, .framer-eFMUO .framer-1az6rrr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }',
  '.framer-eFMUO .framer-pstcz7-container, .framer-eFMUO .framer-ybhqfn-container, .framer-eFMUO .framer-1xw5b3y-container, .framer-eFMUO .framer-183wtty-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-eFMUO .framer-2tddqs-container { flex: none; height: 30px; position: relative; width: 30px; }',
  '.framer-eFMUO .framer-19wyruc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 6; }',
  '.framer-eFMUO .framer-11hxu5b { flex: none; height: 41px; overflow: visible; position: relative; width: 223px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eFMUO .framer-izyxzw, .framer-eFMUO .framer-1oltp4q, .framer-eFMUO .framer-19wyruc, .framer-eFMUO .framer-1az6rrr { gap: 0px; } .framer-eFMUO .framer-izyxzw > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-eFMUO .framer-izyxzw > :first-child, .framer-eFMUO .framer-1oltp4q > :first-child, .framer-eFMUO .framer-19wyruc > :first-child, .framer-eFMUO .framer-1az6rrr > :first-child { margin-left: 0px; } .framer-eFMUO .framer-izyxzw > :last-child, .framer-eFMUO .framer-1oltp4q > :last-child, .framer-eFMUO .framer-19wyruc > :last-child, .framer-eFMUO .framer-1az6rrr > :last-child { margin-right: 0px; } .framer-eFMUO .framer-1oltp4q > *, .framer-eFMUO .framer-19wyruc > *, .framer-eFMUO .framer-1az6rrr > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } }',
  '.framer-eFMUO.framer-v-1ifus9o.framer-20v9o { padding: 22px 30px 22px 30px; width: 1000px; }',
  '.framer-eFMUO.framer-v-1ifus9o .framer-19wyruc { gap: 27px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eFMUO.framer-v-1ifus9o .framer-19wyruc { gap: 0px; } .framer-eFMUO.framer-v-1ifus9o .framer-19wyruc > * { margin: 0px; margin-left: calc(27px / 2); margin-right: calc(27px / 2); } .framer-eFMUO.framer-v-1ifus9o .framer-19wyruc > :first-child { margin-left: 0px; } .framer-eFMUO.framer-v-1ifus9o .framer-19wyruc > :last-child { margin-right: 0px; } }',
  '.framer-eFMUO.framer-v-1nuk8pz.framer-20v9o { flex-direction: column; gap: 24px; justify-content: center; padding: 15px 30px 15px 30px; width: 810px; }',
  '.framer-eFMUO.framer-v-1nuk8pz .framer-izyxzw, .framer-eFMUO.framer-v-nixar0 .framer-izyxzw, .framer-eFMUO.framer-v-19jbhga .framer-izyxzw { gap: unset; justify-content: space-between; min-height: unset; min-width: unset; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eFMUO.framer-v-1nuk8pz.framer-20v9o, .framer-eFMUO.framer-v-1nuk8pz .framer-izyxzw { gap: 0px; } .framer-eFMUO.framer-v-1nuk8pz.framer-20v9o > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-eFMUO.framer-v-1nuk8pz.framer-20v9o > :first-child { margin-top: 0px; } .framer-eFMUO.framer-v-1nuk8pz.framer-20v9o > :last-child { margin-bottom: 0px; } .framer-eFMUO.framer-v-1nuk8pz .framer-izyxzw > *, .framer-eFMUO.framer-v-1nuk8pz .framer-izyxzw > :first-child, .framer-eFMUO.framer-v-1nuk8pz .framer-izyxzw > :last-child { margin: 0px; } }',
  '.framer-eFMUO.framer-v-nixar0.framer-20v9o { flex-direction: column; gap: 24px; justify-content: center; padding: 15px 20px 15px 20px; width: 527px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eFMUO.framer-v-nixar0.framer-20v9o, .framer-eFMUO.framer-v-nixar0 .framer-izyxzw { gap: 0px; } .framer-eFMUO.framer-v-nixar0.framer-20v9o > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-eFMUO.framer-v-nixar0.framer-20v9o > :first-child { margin-top: 0px; } .framer-eFMUO.framer-v-nixar0.framer-20v9o > :last-child { margin-bottom: 0px; } .framer-eFMUO.framer-v-nixar0 .framer-izyxzw > *, .framer-eFMUO.framer-v-nixar0 .framer-izyxzw > :first-child, .framer-eFMUO.framer-v-nixar0 .framer-izyxzw > :last-child { margin: 0px; } }',
  '.framer-eFMUO.framer-v-19jbhga.framer-20v9o { flex-direction: column; gap: 24px; justify-content: center; padding: 15px 30px 0px 30px; width: 810px; }',
  '.framer-eFMUO.framer-v-19jbhga .framer-19wyruc { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 12px; padding: 32px; width: 108%; z-index: 1; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eFMUO.framer-v-19jbhga.framer-20v9o, .framer-eFMUO.framer-v-19jbhga .framer-izyxzw, .framer-eFMUO.framer-v-19jbhga .framer-19wyruc { gap: 0px; } .framer-eFMUO.framer-v-19jbhga.framer-20v9o > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-eFMUO.framer-v-19jbhga.framer-20v9o > :first-child, .framer-eFMUO.framer-v-19jbhga .framer-19wyruc > :first-child { margin-top: 0px; } .framer-eFMUO.framer-v-19jbhga.framer-20v9o > :last-child, .framer-eFMUO.framer-v-19jbhga .framer-19wyruc > :last-child { margin-bottom: 0px; } .framer-eFMUO.framer-v-19jbhga .framer-izyxzw > *, .framer-eFMUO.framer-v-19jbhga .framer-izyxzw > :first-child, .framer-eFMUO.framer-v-19jbhga .framer-izyxzw > :last-child { margin: 0px; } .framer-eFMUO.framer-v-19jbhga .framer-19wyruc > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }',
  '.framer-eFMUO.framer-v-gqa7es.framer-20v9o { flex-direction: column; gap: 24px; justify-content: center; padding: 15px 0px 0px 0px; width: 527px; }',
  '.framer-eFMUO.framer-v-gqa7es .framer-izyxzw { gap: unset; justify-content: space-between; min-height: unset; min-width: unset; padding: 0px 20px 0px 20px; width: 100%; }',
  '.framer-eFMUO.framer-v-gqa7es .framer-19wyruc { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 12px; padding: 20px 15px 20px 15px; width: 100%; z-index: 1; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eFMUO.framer-v-gqa7es.framer-20v9o, .framer-eFMUO.framer-v-gqa7es .framer-izyxzw, .framer-eFMUO.framer-v-gqa7es .framer-19wyruc { gap: 0px; } .framer-eFMUO.framer-v-gqa7es.framer-20v9o > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-eFMUO.framer-v-gqa7es.framer-20v9o > :first-child, .framer-eFMUO.framer-v-gqa7es .framer-19wyruc > :first-child { margin-top: 0px; } .framer-eFMUO.framer-v-gqa7es.framer-20v9o > :last-child, .framer-eFMUO.framer-v-gqa7es .framer-19wyruc > :last-child { margin-bottom: 0px; } .framer-eFMUO.framer-v-gqa7es .framer-izyxzw > *, .framer-eFMUO.framer-v-gqa7es .framer-izyxzw > :first-child, .framer-eFMUO.framer-v-gqa7es .framer-izyxzw > :last-child { margin: 0px; } .framer-eFMUO.framer-v-gqa7es .framer-19wyruc > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }',
];
var FramerjAr6E0kPc = withCSS3(Component3, css5, 'framer-eFMUO',);
var stdin_default5 = FramerjAr6E0kPc;
FramerjAr6E0kPc.displayName = 'Navigation';
FramerjAr6E0kPc.defaultProps = { height: 85, width: 1296, };
addPropertyControls3(FramerjAr6E0kPc, {
  variant: {
    options: ['AdaLR3nqj', 'vPpJ6IFPn', 'maNPgvx7O', 'nCRz2Hejg', 'b6MmRBhMj', 'ypYC11pFU',],
    optionTitles: ['Desktop', 'Laptop', 'Tablet', 'Mobile', 'Tablet Open', 'Mobile Open',],
    title: 'Variant',
    type: ControlType3.Enum,
  },
  sCRIQGxNC: { title: 'raycastUrl', type: ControlType3.Link, },
  J_QbTJlEC: { title: 'crispPlugin', type: ControlType3.Link, },
},);
addFonts3(FramerjAr6E0kPc, [{ explicitInter: true, fonts: [], }, ...LogoFonts, ...ButtonFonts, ...HumburgerFonts, ...NavItemFonts,], {
  supportsExplicitInterCodegen: true,
},);

// virtual:nav
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default5.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default5, ...props, },);
};
var nav_default = stdin_default5;
export { nav_default as default, };
