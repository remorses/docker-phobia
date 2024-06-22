/* eslint-disable */
'use client';

// https :https://framerusercontent.com/modules/lvEKKazLg6RBTN02u2mr/tvZxvakkRdoI2skxXgSf/rf_ckdRey.js
import { jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  ComponentViewportProvider,
  cx as cx2,
  FormPlainTextInput,
  getFonts,
  RichText as RichText2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
  withFX as withFX2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/r4MwdB6MjpAiDn8TjVd2/yJhbXfEJ051y0IjvULuo/YXTleVdfY.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
  withFX,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var MotionDivWithFX = withFX(motion.div,);
var enabledGestures = { xASwwcC8_: { hover: true, pressed: true, }, };
var cycleOrder = ['xASwwcC8_', 'KaFG3iKrP', 'HMp24BznT', 'bq8ZBkbLB', 'LEWQGtjcU',];
var serializationHash = 'framer-xMPQS';
var variantClassNames = {
  bq8ZBkbLB: 'framer-v-1fax13a',
  HMp24BznT: 'framer-v-196xhqi',
  KaFG3iKrP: 'framer-v-d69gnn',
  LEWQGtjcU: 'framer-v-e7ynjv',
  xASwwcC8_: 'framer-v-14fxbcm',
};
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1,], type: 'tween', };
var transition2 = { delay: 0, duration: 1, ease: [0, 0, 1, 1,], type: 'tween', };
var animation = { opacity: 1, rotate: 360, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0, };
var transformTemplate1 = (_, t,) => `translateX(-50%) ${t}`;
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = {
  Default: 'xASwwcC8_',
  Disabled: 'HMp24BznT',
  Error: 'LEWQGtjcU',
  Loading: 'KaFG3iKrP',
  Success: 'bq8ZBkbLB',
};
var getProps = ({ height, id, width, ...props },) => {
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
        : 'xASwwcC8_',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'xASwwcC8_',
    enabledGestures,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'KaFG3iKrP') return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === 'KaFG3iKrP') return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.button, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-14fxbcm', className, classNames,),
          'data-framer-name': 'Default',
          'data-reset': 'button',
          layoutDependency,
          layoutId: 'xASwwcC8_',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            backgroundColor: 'rgb(51, 51, 51)',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            opacity: 1,
            ...style,
          },
          variants: {
            'xASwwcC8_-hover': { backgroundColor: 'rgba(51, 51, 51, 0.85)', },
            HMp24BznT: { opacity: 0.5, },
            LEWQGtjcU: { backgroundColor: 'rgba(255, 34, 68, 0.15)', },
          },
          ...addPropertyOverrides(
            {
              'xASwwcC8_-hover': { 'data-framer-name': void 0, },
              'xASwwcC8_-pressed': { 'data-framer-name': void 0, },
              bq8ZBkbLB: { 'data-framer-name': 'Success', },
              HMp24BznT: { 'data-framer-name': 'Disabled', },
              KaFG3iKrP: { 'data-framer-name': 'Loading', },
              LEWQGtjcU: { 'data-framer-name': 'Error', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
                  style: {
                    '--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
                    '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                    '--framer-font-size': '14px',
                    '--framer-font-weight': '600',
                    '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                  },
                  children: 'Search',
                },),
              },),
              className: 'framer-105iuam',
              fonts: ['Inter-SemiBold',],
              layoutDependency,
              layoutId: 'OJe01T7gV',
              style: {
                '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              variants: { LEWQGtjcU: { '--extracted-r6o4lv': 'rgb(255, 34, 68)', }, },
              verticalAlignment: 'top',
              withExternalLayout: true,
              ...addPropertyOverrides(
                {
                  bq8ZBkbLB: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '600',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                        },
                        children: 'Thank you',
                      },),
                    },),
                  },
                  LEWQGtjcU: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--font-selector': 'SW50ZXItU2VtaUJvbGQ=',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-weight': '600',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 34, 68))',
                        },
                        children: 'Something went wrong',
                      },),
                    },),
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-6fb1ke',
              'data-framer-name': 'Spinner',
              layoutDependency,
              layoutId: 'N21XSIXTv',
              style: {
                mask: 'url(\'https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg\') alpha no-repeat center / cover add',
                WebkitMask:
                  'url(\'https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg\') alpha no-repeat center / cover add',
              },
              children: /* @__PURE__ */ _jsx(MotionDivWithFX, {
                __framer__loop: animation,
                __framer__loopEffectEnabled: true,
                __framer__loopRepeatDelay: 0,
                __framer__loopRepeatType: 'loop',
                __framer__loopTransition: transition2,
                __perspectiveFX: false,
                __smartComponentFX: true,
                __targetOpacity: 1,
                className: 'framer-130og0o',
                'data-framer-name': 'Conic',
                layoutDependency,
                layoutId: 'A6AZkzBi8',
                style: { background: 'conic-gradient(from 180deg at 50% 50%, #4cf 0deg, #4cf 360deg)', },
                variants: {
                  KaFG3iKrP: {
                    background:
                      'conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)',
                    mask:
                      'url(\'https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg\') alpha no-repeat center / cover add',
                    WebkitMask:
                      'url(\'https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg\') alpha no-repeat center / cover add',
                  },
                },
                children: /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-ox9z0q',
                  'data-framer-name': 'Rounding',
                  layoutDependency,
                  layoutId: 'ICiE6s50s',
                  style: {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 1,
                    borderBottomRightRadius: 1,
                    borderTopLeftRadius: 1,
                    borderTopRightRadius: 1,
                  },
                  transformTemplate: transformTemplate1,
                },),
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-xMPQS.framer-1g41hv, .framer-xMPQS .framer-1g41hv { display: block; }',
  '.framer-xMPQS.framer-14fxbcm { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 240px; }',
  '.framer-xMPQS .framer-105iuam { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }',
  '.framer-xMPQS .framer-6fb1ke { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }',
  '.framer-xMPQS .framer-130og0o { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-xMPQS .framer-ox9z0q { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xMPQS.framer-14fxbcm { gap: 0px; } .framer-xMPQS.framer-14fxbcm > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-xMPQS.framer-14fxbcm > :first-child { margin-left: 0px; } .framer-xMPQS.framer-14fxbcm > :last-child { margin-right: 0px; } }',
  '.framer-xMPQS.framer-v-d69gnn.framer-14fxbcm, .framer-xMPQS.framer-v-196xhqi.framer-14fxbcm, .framer-xMPQS.framer-v-1fax13a.framer-14fxbcm, .framer-xMPQS.framer-v-e7ynjv.framer-14fxbcm { cursor: unset; }',
  '.framer-xMPQS.framer-v-d69gnn .framer-130og0o { overflow: hidden; }',
];
var FramerYXTleVdfY = withCSS(Component, css, 'framer-xMPQS',);
var stdin_default = FramerYXTleVdfY;
FramerYXTleVdfY.displayName = 'SearcjButton';
FramerYXTleVdfY.defaultProps = { height: 40, width: 240, };
addPropertyControls(FramerYXTleVdfY, {
  variant: {
    options: ['xASwwcC8_', 'KaFG3iKrP', 'HMp24BznT', 'bq8ZBkbLB', 'LEWQGtjcU',],
    optionTitles: ['Default', 'Loading', 'Disabled', 'Success', 'Error',],
    title: 'Variant',
    type: ControlType.Enum,
  },
},);
addFonts(FramerYXTleVdfY, [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://app.framerstatic.com/Inter-SemiBold.cyrillic-ext-C7KWUKA7.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://app.framerstatic.com/Inter-SemiBold.cyrillic-JWV7SOZ6.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://app.framerstatic.com/Inter-SemiBold.greek-ext-FBKSFTSU.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://app.framerstatic.com/Inter-SemiBold.greek-EQ3PSENU.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://app.framerstatic.com/Inter-SemiBold.latin-ext-ULRSO3ZR.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://app.framerstatic.com/Inter-SemiBold.latin-RDYY2AG2.woff2',
    weight: '600',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://app.framerstatic.com/Inter-SemiBold.vietnamese-ESQNSEQ3.woff2',
    weight: '600',
  },],
},], { supportsExplicitInterCodegen: true, },);

// https :https://framerusercontent.com/modules/lvEKKazLg6RBTN02u2mr/tvZxvakkRdoI2skxXgSf/rf_ckdRey.js
var RichTextWithFX = withFX2(RichText2,);
var SearcjButtonFonts = getFonts(stdin_default,);
var cycleOrder2 = ['GpM_z4mCM',];
var serializationHash2 = 'framer-RxRq6';
var variantClassNames2 = { GpM_z4mCM: 'framer-v-6ne45o', };
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var animation2 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transformPerspective: 1200, x: 0, y: 50, };
var transition22 = { damping: 40, delay: 0.2, mass: 1, stiffness: 400, type: 'spring', };
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React2.Fragment,);
var getProps2 = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency2 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className, layoutId, variant, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'GpM_z4mCM',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
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
        value: transition12,
        children: /* @__PURE__ */ _jsxs2(motion2.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-6ne45o', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'GpM_z4mCM',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          children: [
            /* @__PURE__ */ _jsx2(motion2.div, {
              className: 'framer-10y1fef',
              layoutDependency,
              layoutId: 'SgtAFtOl4',
              children: /* @__PURE__ */ _jsx2(RichTextWithFX, {
                __framer__animate: { transition: transition22, },
                __framer__animateOnce: true,
                __framer__enter: animation2,
                __framer__styleAppearEffectEnabled: true,
                __framer__threshold: 0,
                __fromCanvasComponent: true,
                __perspectiveFX: false,
                __smartComponentFX: true,
                __targetOpacity: 1,
                children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                  children: /* @__PURE__ */ _jsx2(motion2.h1, {
                    style: {
                      '--font-selector': 'R0Y7U3BhY2UgR3JvdGVzay03MDA=',
                      '--framer-font-family': '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
                      '--framer-font-size': '38px',
                      '--framer-font-weight': '700',
                      '--framer-letter-spacing': '-2px',
                      '--framer-line-height': '1.15em',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color':
                        'var(--extracted-gdpscs, var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255)))',
                    },
                    children: 'Get any Docker image size and see what files are inside',
                  },),
                },),
                className: 'framer-olsjb5',
                'data-framer-name': 'Decentralizing Systems and Building Blockchain & Web3',
                fonts: ['GF;Space Grotesk-700',],
                layoutDependency,
                layoutId: 'NmwFtMats',
                style: {
                  '--extracted-gdpscs': 'var(--token-b50174c0-f355-49d1-a882-48c9e51b5466, rgb(255, 255, 255))',
                  '--framer-paragraph-spacing': '0px',
                  transformPerspective: 1200,
                },
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
            /* @__PURE__ */ _jsxs2(motion2.div, {
              className: 'framer-jn3t82',
              layoutDependency,
              layoutId: 'DPUPJJ5ve',
              children: [
                /* @__PURE__ */ _jsx2(FormPlainTextInput, {
                  className: 'framer-1p05n8y',
                  inputName: 'Name',
                  layoutDependency,
                  layoutId: 'TPsklV0gi',
                  placeholder: 'postgres:latest',
                  style: {
                    '--framer-input-background': 'rgba(187, 187, 187, 0.15)',
                    '--framer-input-border-bottom-width': '1px',
                    '--framer-input-border-color': 'rgba(136, 136, 136, 0.1)',
                    '--framer-input-border-left-width': '1px',
                    '--framer-input-border-radius-bottom-left': '10px',
                    '--framer-input-border-radius-bottom-right': '10px',
                    '--framer-input-border-radius-top-left': '10px',
                    '--framer-input-border-radius-top-right': '10px',
                    '--framer-input-border-right-width': '1px',
                    '--framer-input-border-style': 'solid',
                    '--framer-input-border-top-width': '1px',
                    '--framer-input-font-color': 'rgb(153, 153, 153)',
                    '--framer-input-icon-color': 'rgb(153, 153, 153)',
                    '--framer-input-placeholder-color': 'rgb(153, 153, 153)',
                  },
                  type: 'text',
                },),
                /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                  width: '111px',
                  children: /* @__PURE__ */ _jsx2(motion2.div, {
                    className: 'framer-1nvuryu-container',
                    layoutDependency,
                    layoutId: 'w22SR3RZu-container',
                    children: /* @__PURE__ */ _jsx2(stdin_default, {
                      height: '100%',
                      id: 'w22SR3RZu',
                      layoutId: 'w22SR3RZu',
                      style: { height: '100%', width: '100%', },
                      variant: 'xASwwcC8_',
                      width: '100%',
                    },),
                  },),
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
  '.framer-RxRq6.framer-uy5xhb, .framer-RxRq6 .framer-uy5xhb { display: block; }',
  '.framer-RxRq6.framer-6ne45o { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 100px 0px 100px 0px; position: relative; width: 1140px; }',
  '.framer-RxRq6 .framer-10y1fef { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }',
  '.framer-RxRq6 .framer-olsjb5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 482px; word-break: break-word; word-wrap: break-word; }',
  '.framer-RxRq6 .framer-jn3t82 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 500px; overflow: hidden; padding: 0px; position: relative; width: 100%; }',
  '.framer-RxRq6 .framer-1p05n8y { --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400px; --framer-input-padding: 12px; flex: 1 0 0px; height: 40px; position: relative; width: 1px; }',
  '.framer-RxRq6 .framer-1nvuryu-container { flex: none; height: 40px; position: relative; width: 111px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-RxRq6.framer-6ne45o, .framer-RxRq6 .framer-10y1fef, .framer-RxRq6 .framer-jn3t82 { gap: 0px; } .framer-RxRq6.framer-6ne45o > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-RxRq6.framer-6ne45o > :first-child, .framer-RxRq6 .framer-10y1fef > :first-child { margin-top: 0px; } .framer-RxRq6.framer-6ne45o > :last-child, .framer-RxRq6 .framer-10y1fef > :last-child { margin-bottom: 0px; } .framer-RxRq6 .framer-10y1fef > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-RxRq6 .framer-jn3t82 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-RxRq6 .framer-jn3t82 > :first-child { margin-left: 0px; } .framer-RxRq6 .framer-jn3t82 > :last-child { margin-right: 0px; } }',
];
var Framerrf_ckdRey = withCSS2(Component2, css2, 'framer-RxRq6',);
var stdin_default2 = Framerrf_ckdRey;
Framerrf_ckdRey.displayName = 'HeroAndSearch';
Framerrf_ckdRey.defaultProps = { height: 357, width: 1140, };
addFonts2(Framerrf_ckdRey, [{
  explicitInter: true,
  fonts: [{
    family: 'Space Grotesk',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksmNsFjTDJK.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZ1rib2Bg-4.woff2',
    weight: '400',
  },],
}, ...SearcjButtonFonts,], { supportsExplicitInterCodegen: true, },);

// virtual:hero-search
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default2.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default2, ...props, },);
};
var hero_search_default = stdin_default2;
export { hero_search_default as default, };
