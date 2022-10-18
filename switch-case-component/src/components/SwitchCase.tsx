interface SwitchCaseProps<Case extends string> {
  value: Case
  caseBy: Partial<Record<Case, JSX.Element | null>>
  defaultComponent?: JSX.Element | null
}

/**
 * @name SwitchCase
 *
 * @description
 * switch-case 구문을 선언적으로 사용할 수 있는 컴포넌트
 *
 * @example
 *  <SwitchCase
 *    value={switchCase}
 *    // status 값이 `'a'`, `'b'`, `'c'` 인지에 따라서 아래 컴포넌트가 render 됩니다.
 *    caseBy={{
 *      a: <>a</>
 *      b: <>b</>
 *      c: <>c</>
 *    }}
 *    // status 값이 아무것도 해당되지 않는 경우, 이 컴포넌트가 render 됩니다.
 *    defaultComponent={<>default</>}
 * />
 */
function SwitchCase<Case extends string>({
  value,
  caseBy,
  defaultComponent = null,
}: SwitchCaseProps<Case>) {
  if (value == null) {
    return defaultComponent
  }

  return caseBy[value] ?? defaultComponent
}

export default SwitchCase
