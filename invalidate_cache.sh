#!/bin/bash

datetime=$(date +%Y%m%d%H%M%S)
checksum=$(echo -n "$datetime" | md5sum | cut -c1-6)

version="${datetime}${checksum}"

for file in *.html; do
  sed -i -E "s|(style\.css)(\?v=[^\"']*)?|\\1?v=$version|g" "$file"
  sed -i -E "s|(script\.js)(\?v=[^\"']*)?|\\1?v=$version|g" "$file"

  echo "Updated cache version in: $file"
done

echo "Invalidate cache: $version"
