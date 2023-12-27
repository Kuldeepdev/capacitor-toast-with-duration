# capacitor-toast-with-duration

The Toast API provides a notification pop up for displaying important information to a user. Just like real toast!

## Install

```bash
npm install capacitor-toast-with-duration
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`show(...)`](#show)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### show(...)

```typescript
show(options: ShowOptions) => Promise<void>
```

Shows a Toast on the screen

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#showoptions">ShowOptions</a></code> |

**Since:** 1.0.0

--------------------


### Interfaces


#### ShowOptions

| Prop                       | Type                                       | Description                                                                          | Default               | Since |
| -------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ | --------------------- | ----- |
| **`text`**                 | <code>string</code>                        | Text to display on the Toast                                                         |                       | 1.0.0 |
| **`duration`**             | <code>'short' \| 'long'</code>             | Duration of the Toast, either 'short' (2000ms) or 'long' (3500ms)                    | <code>'short'</code>  | 1.0.0 |
| **`durationMilliseconds`** | <code>number</code>                        | Duration of the Toast in milliseconds. This option is only supported on iOS and Web. |                       | 6.0.0 |
| **`position`**             | <code>'top' \| 'center' \| 'bottom'</code> | Position of the Toast. On Android 12 and newer all toasts are shown at the bottom.   | <code>'bottom'</code> | 1.0.0 |

</docgen-api>
