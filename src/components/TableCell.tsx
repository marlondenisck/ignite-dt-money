interface TableCellProps {
  children: React.ReactNode
  isRoundedL?: boolean
  isRoundedR?: boolean
  variant?: 'income' | 'outcome'
  width?: string
}

export function TableCell({
  children,
  isRoundedL = false,
  isRoundedR = false,
  variant,
  width
}: TableCellProps) {
  const baseClasses = 'bg-gray-700 px-8 py-5'
  const roundedClasses = isRoundedL
    ? 'rounded-l-[6px] rounded-bl-[6px]'
    : isRoundedR
      ? 'rounded-r-[6px] rounded-br-[6px]'
      : ''
  const variantClasses =
    variant === 'income'
      ? 'text-green-300'
      : variant === 'outcome'
        ? 'text-red-300'
        : ''
  return (
    <td
      width={width}
      className={`${baseClasses} ${roundedClasses} ${variantClasses}`}
    >
      {children}
    </td>
  )
}
