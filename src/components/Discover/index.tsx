import React from 'react'
import { resolveElementWithProps, useProps } from '@figmint/react'

import image1 from './assets/c406e3035cf355e8cd1baf07ad5743e9.png'
import image2 from './assets/dc5156c992613b0efe3c7b857b76b657.png'
import image3 from './assets/4d2c76ca8c9813264f43e410d11e24d2.png'
import image4 from './assets/3abebcf85c521b37bcf4a10034d61fe3.png'
import image5 from './assets/15c21d4545711c820810bf6c6f64aa07.png'

interface DiscoverProps {
  elementProps?: {
    [elementId: string]: Record<string, any> & {
      className?: string
      style?: React.CSSProperties
      as?: React.ElementType
    }
  }
}

const Discover = (incomingProps: DiscoverProps) => {
  const { props } = useProps({} as DiscoverProps, incomingProps)

  const render = (
    defaultTag: string,
    elementAttrs: Record<string, any>,
    ...children: any[]
  ) => resolveElementWithProps(null, props, defaultTag, elementAttrs, children)
  return (
    <>
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@900&family=Comfortaa:wght@400&display=swap'
        rel='stylesheet'
      />
      ,{' '}
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@900&family=Comfortaa:wght@400&display=swap'
        rel='stylesheet'
      />
      {render(
        'div',
        {
          'data-figma-id': '229:2',
          className:
            'bg-[#FFF] w-[100%] h-[100%] absolute top-[0px] left-[0px]',
        },
        render('div', {
          'data-figma-id': '0:535',
          className: 'w-[375px] h-[2267px] absolute left-[0px]',
          style: {
            top: '-570px',
            background: {
              type: 'template',
              parts: [
                'linear-gradient(to bottom, ',
                'rgba(255, 255, 255, 1)',
                ', ',
                'rgba(255, 255, 255, 1)',
                ')',
              ],
            },
          },
        }),
        render(
          'p',
          {
            'data-figma-id': '0:537',
            className:
              'text-[#000] text-[13px] not-italic font-black tracking-[0.52px] uppercase w-[auto] h-[auto] absolute left-[16px] whitespace-nowrap m-[0]',
            style: {
              'font-family': 'Roboto',
              'line-height': 'normal',
              top: '-422px',
            },
          },
          'What’s new today'
        ),
        render(
          'p',
          {
            'data-figma-id': '0:538',
            className:
              'text-[#000] text-[13px] not-italic font-black tracking-[0.52px] uppercase w-[auto] h-[auto] absolute top-[52px] left-[16px] whitespace-nowrap m-[0]',
            style: { 'font-family': 'Roboto', 'line-height': 'normal' },
          },
          'Browse all'
        ),
        render(
          'div',
          {
            'data-figma-id': '0:536',
            className: 'w-[167px] h-[220px] absolute top-[91px] left-[16px]',
          },
          React.createElement('img', {
            src: image1,
            className: 'w-[100%] h-[100%] object-cover',
          })
        ),
        render(
          'div',
          {
            'data-figma-id': '0:540',
            className: 'w-[167px] h-[310px] absolute top-[411px] left-[192px]',
          },
          React.createElement('img', {
            src: image2,
            className: 'w-[100%] h-[100%] object-cover',
          })
        ),
        render(
          'div',
          {
            'data-figma-id': '0:542',
            className: 'w-[167px] h-[310px] absolute top-[321px] left-[16px]',
          },
          React.createElement('img', {
            src: image3,
            className: 'w-[100%] h-[100%] object-cover',
          })
        ),
        render(
          'div',
          {
            'data-figma-id': '0:541',
            className: 'w-[167px] h-[310px] absolute top-[91px] left-[192px]',
          },
          React.createElement('img', {
            src: image4,
            className: 'w-[100%] h-[100%] object-cover',
          })
        ),
        render(
          'div',
          {
            'data-figma-id': '0:539',
            className: 'w-[167px] h-[220px] absolute top-[640px] left-[16px]',
          },
          React.createElement('img', {
            src: image5,
            className: 'w-[100%] h-[100%] object-cover',
          })
        ),
        render(
          'div',
          {
            'data-figma-id': '0:1396',
            className: 'justify-end w-[148px] h-[40px] absolute left-[16px]',
            style: { top: '-494px' },
          },
          render(
            'p',
            {
              'data-figma-id': '0:1397',
              className:
                'text-[#000] text-[36px] not-italic font-normal tracking-[-0.54px] absolute top-[0px] bottom-[0px] left-[0px] w-[auto] h-[auto] whitespace-nowrap m-[0]',
              style: {
                'font-family': 'Comfortaa',
                'line-height': 'normal',
                right: '-9px',
              },
            },
            'Discover'
          )
        ),
        render(
          'div',
          {
            'data-figma-id': '0:1261',
            className: 'w-[375px] h-[83px] absolute bottom-[0px] left-[0px]',
          },
          render(
            'div',
            {
              'data-figma-id': '0:1262',
              className:
                'absolute top-[0px] bottom-[0px] left-[0px] right-[0px]',
            },
            render('div', {
              'data-figma-id': '0:1263',
              className:
                'shadow-[0 -0.5px 0 0 rgba(0, 0, 0, 0.30)] absolute top-[0px] bottom-[0px] left-[0px] right-[0px]',
              style: {
                'backdrop-filter': 'blur(13.591408729553223px)',
                background: {
                  type: 'template',
                  parts: [
                    'linear-gradient(to bottom, ',
                    'rgba(255, 255, 255, 1)',
                    ', ',
                    'rgba(255, 255, 255, 1)',
                    ')',
                  ],
                },
              },
            }),
            render(
              'div',
              {
                'data-figma-id': '0:1264',
                className:
                  'absolute top-[9px] bottom-[34px] left-[11px] right-[324px]',
              },
              render(
                'div',
                {
                  'data-figma-id': '0:1265',
                  className: 'absolute top-[13px] left-[12px]',
                },
                <svg
                  width='16'
                  height='15'
                  viewBox='0 0 16 15'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M15.5566 7.77832L14.8496 8.48535L13.7783 7.41406V14.0566H1.77832V7.41406L0.707031 8.48535L0 7.77832L7.77832 0L15.5566 7.77832ZM6.77832 9.05664V13.0566H8.77832V9.05664H6.77832ZM9.77832 13.0566H12.7783V6.41406L7.77832 1.41406L2.77832 6.41406V13.0566H5.77832V8.05664H9.77832V13.0566Z'
                    fill='black'
                    fill-opacity='0.8'
                  />
                </svg>
              )
            ),
            render(
              'div',
              {
                'data-figma-id': '0:1275',
                className:
                  'absolute top-[9px] bottom-[34px] left-[82px] right-[253px]',
              },
              render(
                'div',
                {
                  'data-figma-id': '0:1276',
                  className: 'absolute top-[12px] left-[12px]',
                },
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M6.5 0C10.0899 0 13 2.91015 13 6.5C13 8.1149 12.4094 9.59078 11.4346 10.7275L15.8535 15.1465L15.1465 15.8535L10.7275 11.4346C9.59078 12.4094 8.1149 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0ZM6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1Z'
                    fill='black'
                    fill-opacity='0.8'
                  />
                </svg>
              )
            ),
            render(
              'div',
              {
                'data-figma-id': '0:1279',
                className:
                  'absolute top-[9px] bottom-[34px] left-[153px] right-[152px]',
              },
              render('div', {
                'data-figma-id': '0:1280',
                className:
                  'rounded-[20px] absolute top-[0px] bottom-[0px] left-[0px] right-[0px]',
              }),
              render(
                'div',
                {
                  'data-figma-id': '0:1281',
                  className: 'absolute top-[13.5px] left-[28.5px]',
                },
                <svg
                  width='13'
                  height='13'
                  viewBox='0 0 13 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 6H13V7H7V13H6V7H0V6H6V0H7V6Z' fill='white' />
                </svg>
              )
            ),
            render(
              'div',
              {
                'data-figma-id': '0:1284',
                className:
                  'absolute top-[9px] bottom-[34px] left-[254px] right-[81px]',
              },
              render(
                'div',
                {
                  'data-figma-id': '0:1285',
                  className: 'absolute top-[12px] left-[10px]',
                },
                <svg
                  width='18'
                  height='16'
                  viewBox='0 0 18 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10 0C14.4183 0 18 3.58172 18 8C18 12.4183 14.4183 16 10 16C8.74027 16 7.54935 15.7072 6.48926 15.1885L0 16L2.78906 11.4678C2.28361 10.4186 2 9.24249 2 8C2 3.58172 5.58172 0 10 0ZM10 1C6.13401 1 3 4.13401 3 8C3 9.08878 3.24871 10.1173 3.69043 11.0342L3.92773 11.5264L3.64062 11.9922L1.94434 14.749L6.36523 14.1963L6.66113 14.1592L6.92871 14.29C7.85589 14.7437 8.89693 15 10 15C13.866 15 17 11.866 17 8C17 4.13401 13.866 1 10 1Z'
                    fill='black'
                    fill-opacity='0.8'
                  />
                </svg>
              )
            ),
            render(
              'div',
              {
                'data-figma-id': '0:1289',
                className:
                  'absolute top-[9px] bottom-[34px] left-[324px] right-[11px]',
              },
              React.createElement(
                React.Fragment,
                null,
                render(
                  'div',
                  {
                    'data-figma-id': '0:1292',
                    className: 'absolute top-[12px] left-[16.3046875px]',
                  },
                  <svg
                    width='9'
                    height='9'
                    viewBox='0 0 9 9'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <ellipse
                      cx='4.41307'
                      cy='4.41304'
                      rx='3.91307'
                      ry='3.91304'
                      stroke='black'
                      stroke-linecap='square'
                    />
                  </svg>
                ),
                render(
                  'div',
                  {
                    'data-figma-id': '0:1291',
                    className: 'absolute top-[20.478271484375px] left-[15px]',
                  },
                  <svg
                    width='12'
                    height='8'
                    viewBox='0 0 12 8'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.71739 0.5C2.83591 0.5 0.5 2.83591 0.5 5.71739V7.02174H10.9348V5.71739C10.9348 2.83591 8.59888 0.5 5.71739 0.5Z'
                      stroke='black'
                    />
                  </svg>
                )
              )
            )
          ),
          render('div', {
            'data-figma-id': '0:1293',
            className:
              'rounded-[10px] absolute top-[70px] bottom-[8px] left-[120px] right-[120px]',
            style: {
              background: {
                type: 'template',
                parts: [
                  'linear-gradient(to bottom, ',
                  'rgba(0, 0, 0, 1)',
                  ', ',
                  'rgba(0, 0, 0, 1)',
                  ')',
                ],
              },
            },
          })
        ),
        render(
          'div',
          {
            'data-figma-id': '0:1190',
            className:
              'justify-end gap-[216px] w-[375px] h-[44px] absolute top-[0px] left-[0px]',
          },
          render(
            'div',
            {
              'data-figma-id': '0:1207',
              className:
                'justify-center w-[56px] h-[23px] absolute top-[8px] left-[21px]',
            },
            render(
              'p',
              {
                'data-figma-id': '0:1208',
                className:
                  'flex-shrink-0 text-[#000] text-center text-[15px] not-italic font-semibold tracking-[-0.333px] h-[auto] absolute left-[0.3330078125px] right-[1.6669921875px] m-[0]',
                style: {
                  'font-family': '"SF Pro Text"',
                  'line-height': 'normal',
                  top: 'calc(6px + (100% - 23px) / 2)',
                  'white-space': 'normal',
                  'word-wrap': 'break-word',
                },
              },
              '9:27'
            )
          ),
          render(
            'div',
            {
              'data-figma-id': '0:1191',
              className:
                'pt-[1px] justify-center gap-[2px] w-[68px] h-[16px] absolute top-[15px] right-[14px]',
            },
            render(
              'div',
              {
                'data-figma-id': '0:1196',
                className:
                  'absolute top-[1px] bottom-[0px] left-[20px] right-[27px]',
              },
              render(
                'div',
                {
                  'data-figma-id': '0:1197',
                  className:
                    'absolute top-[1.333343505859375px] left-[2.6669921875px]',
                },
                <svg
                  width='16'
                  height='11'
                  viewBox='0 0 16 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5.43751 8.46603C6.72415 7.40033 8.60882 7.40044 9.89551 8.46603C9.96019 8.5233 9.99816 8.6043 10 8.68966C10.0018 8.77498 9.96739 8.85736 9.90528 8.9172L7.89063 10.9084C7.83163 10.9669 7.75093 11.0001 7.667 11.0002C7.58298 11.0002 7.50243 10.9669 7.44337 10.9084L5.42774 8.9172C5.36573 8.85732 5.33117 8.77495 5.33301 8.68966C5.33491 8.60432 5.37283 8.52327 5.43751 8.46603ZM2.76563 5.60177C5.5279 3.02241 9.8051 3.02244 12.5674 5.60177C12.6297 5.66226 12.6661 5.7452 12.667 5.83224C12.6678 5.91919 12.6333 6.00298 12.5723 6.06466L11.4121 7.24142C11.2925 7.36161 11.0993 7.36427 10.9766 7.24728C10.0695 6.42272 8.88877 5.96596 7.66505 5.96603C6.44243 5.96665 5.26377 6.42355 4.35743 7.24728C4.23478 7.36427 4.04149 7.36152 3.92188 7.24142L2.76075 6.06466C2.69963 6.00306 2.66623 5.91918 2.667 5.83224C2.66782 5.74523 2.70331 5.66225 2.76563 5.60177ZM0.0966867 2.98068C4.32862 -0.993512 11.0054 -0.993608 15.2373 2.98068C15.2984 3.03962 15.3324 3.12031 15.333 3.20431C15.3335 3.28851 15.2998 3.37016 15.2393 3.4299L14.0791 4.57736C13.9595 4.69515 13.765 4.69626 13.6436 4.58029C12.0312 3.07835 9.89157 2.24054 7.667 2.24045C5.44212 2.24046 3.30199 3.07812 1.68946 4.58029C1.56816 4.6964 1.3744 4.69522 1.25489 4.57736L0.093757 3.4299C0.0332521 3.37011 -0.000558301 3.28851 6.97586e-06 3.20431C0.000667983 3.12024 0.035471 3.0396 0.0966867 2.98068Z'
                    fill='black'
                  />
                </svg>
              )
            ),
            render(
              'div',
              {
                'data-figma-id': '0:1201',
                className: 'w-[18px] h-[12px] absolute top-[2px] right-[50px]',
              },
              render(
                'div',
                {
                  'data-figma-id': '0:1202',
                  className:
                    'absolute top-[0.666656494140625px] left-[0.6669921875px]',
                },
                <svg
                  width='17'
                  height='11'
                  viewBox='0 0 17 11'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M2 6.66699C2.55228 6.66699 3 7.11471 3 7.66699V9.66699C2.99982 10.2191 2.55218 10.667 2 10.667H1C0.447824 10.667 0.000175969 10.2191 0 9.66699V7.66699C0 7.11471 0.447715 6.66699 1 6.66699H2ZM6.66699 4.66699C7.21913 4.66717 7.66699 5.11482 7.66699 5.66699V9.66699C7.66682 10.219 7.21902 10.6668 6.66699 10.667H5.66699C5.11482 10.667 4.66717 10.2191 4.66699 9.66699V5.66699C4.66699 5.11471 5.11471 4.66699 5.66699 4.66699H6.66699ZM11.333 2.33301C11.8852 2.33301 12.3328 2.78087 12.333 3.33301V9.66699C12.3328 10.2191 11.8852 10.667 11.333 10.667H10.333C9.78098 10.6668 9.33318 10.219 9.33301 9.66699V3.33301C9.33318 2.78098 9.78098 2.33318 10.333 2.33301H11.333ZM16 0C16.5523 0 17 0.447715 17 1V9.66699C16.9998 10.2191 16.5522 10.667 16 10.667H15C14.4478 10.667 14.0002 10.2191 14 9.66699V1C14 0.447715 14.4477 0 15 0H16Z'
                    fill='black'
                  />
                </svg>
              )
            ),
            render(
              'div',
              {
                'data-figma-id': '0:1192',
                className: 'w-[25px] h-[12px] absolute top-[2px] right-[0px]',
              },
              render('div', {
                'data-figma-id': '0:1193',
                className:
                  'rounded-[2.667px] opacity-[0.35] absolute top-[0.333343505859375px] bottom-[0.33332347869873047px] left-[0px] right-[3px]',
                style: { border: '1px solid #000' },
              }),
              render(
                'div',
                {
                  'data-figma-id': '0:1194',
                  className:
                    'absolute top-[4px] bottom-[4px] left-[23px] right-[0.6666666269302368px]',
                },
                <svg
                  width='2'
                  height='4'
                  viewBox='0 0 2 4'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    opacity='0.4'
                    d='M0 0V4C0.80794 3.66122 1.33333 2.87313 1.33333 2C1.33333 1.12687 0.80794 0.338777 0 0'
                    fill='black'
                  />
                </svg>
              ),
              render('div', {
                'data-figma-id': '0:1195',
                className:
                  'rounded-[1.333px] absolute top-[2.33331298828125px] bottom-[2.3333535194396973px] left-[2px] right-[5px]',
                style: {
                  background: {
                    type: 'template',
                    parts: [
                      'linear-gradient(to bottom, ',
                      'rgba(0, 0, 0, 1)',
                      ', ',
                      'rgba(0, 0, 0, 1)',
                      ')',
                    ],
                  },
                },
              })
            )
          )
        )
      )}
    </>
  )
}

export default Discover
