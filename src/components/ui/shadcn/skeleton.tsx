function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse rounded-full bg-#ccc ${className}`}
      {...props}
    />
  )
}

export { Skeleton }
