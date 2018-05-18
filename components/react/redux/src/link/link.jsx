import React from 'react'
import PropTypes from 'prop-types'

const Link = (props) => {
  const {
    href,
    onClick,
    ...params,
  } = props

  const {
    className,
    children
  } = params

  // TODO: factorise code from middleware and from here
  let queryPart = ''
  let processedHref = href.base
  if (href.compiled) processedHref = href.compiled(params)
  if (params.query) queryPart = `?${toQueryString(params.query)}`
  processedHref = `${processedHref}${queryPart}`

  return (
    <a
      className={className}
      href={processedHref}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  href: PropTypes.shape({
    base: PropTypes.string,
  }),
  onClick: PropTypes.func,
}

Link.defaultProps = {
  className: undefined,
  children: undefined,
  href: undefined,
  onClick: undefined,
}

export default Link