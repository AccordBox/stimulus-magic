import { Controller } from '@hotwired/stimulus';

/* eslint-disable no-unused-vars */

function camelize(value) {
  // copied from src/core/string_helpers.ts
  return value.replace(/(?:[_-])([a-z0-9])/g, (_, char) => char.toUpperCase());
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function dasherize(value) {
  return value.replace(/([A-Z])/g, (_, char) => `-${char.toLowerCase()}`);
}
/* eslint-enable no-unused-vars */

const defaultOptions = {
  prop: 'magic',
  verbose: true,
};

export const useMagic = (controller, options={}) => {
  const { prop, verbose } = Object.assign({}, defaultOptions, options);

  controller[prop] = {
    targets: new window.Proxy(controller, {
      get(target, key) {
        const newKey = `${key}Targets`;
        return target[newKey] ?? target.getItem(newKey) ?? undefined;
      },
    }),

    target: new window.Proxy(controller, {
      get(target, key) {
        const newKey = `${key}Target`;
        return target[newKey] ?? target.getItem(newKey) ?? undefined;
      },
    }),

    hasTarget: new window.Proxy(controller, {
      get(target, key) {
        const newKey = `has${capitalize(key)}Target`;
        return target[newKey] ?? target.getItem(newKey) ?? undefined;
      },
    }),

    value: new window.Proxy(controller, {
      get(target, key) {
        const newKey = `${key}Value`;
        return target[newKey] ?? target.getItem(newKey) ?? undefined;
      },

      set(target, key, value) {
        const newKey = `${key}Value`;
        return (target[newKey] = value);
      },
    }),

    hasValue: new window.Proxy(controller, {
      get(target, key) {
        const newKey = `has${capitalize(key)}Value`;
        return target[newKey] ?? target.getItem(newKey) ?? undefined;
      },
    }),

    classes: new window.Proxy(controller, {
      get(target, key) {
        const newKey = `${key}Classes`;
        return target[newKey] ?? target.getItem(newKey) ?? undefined;
      },
    }),

    class: new window.Proxy(controller, {
      get(target, key) {
        const newKey = `${key}Class`;
        return target[newKey] ?? target.getItem(newKey) ?? undefined;
      },
    }),

    hasClass: new window.Proxy(controller, {
      get(target, key) {
        const newKey = `has${capitalize(key)}Class`;
        return target[newKey] ?? target.getItem(newKey) ?? undefined;
      },
    }),
  };

  if (verbose) {
    const identifier = controller.scope.identifier;

    /* eslint-disable no-unused-vars */
    for (const [key, value] of Object.entries(
      controller.constructor.targets || []
    )) {
      console.log(
        `${identifier} target: data-${identifier}-${dasherize(value)}`
      );
    }

    for (const [key, value] of Object.entries(
      controller.constructor.values || []
    )) {
      console.log(`${identifier} value: data-${identifier}-${dasherize(key)}`);
      console.log(`${identifier} value changed: ${key}ValueChanged`);
    }

    for (const [key, value] of Object.entries(
      controller.constructor.classes || []
    )) {
      console.log(`data-${identifier}-${dasherize(key)}`);
    }
    /* eslint-enable no-unused-vars */
  }
};

export class MagicController extends Controller {

  static magicOptions;

  constructor(context) {
    super(context);
    useMagic(this, this.constructor.magicOptions);
  }
}
