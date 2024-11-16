FROM vesoft/nebula-console:v3

ENV GRAPHD_ADDR=graphd
ENV STORAGED_ADDR=storaged0

COPY <<-"EOF" /entrypoint.sh
#!/bin/sh
while true; do
  # Check SHOW HOSTS first
  SHOW_HOSTS=$(nebula-console -addr "$GRAPHD_ADDR" -port 9669 -u root -p nebula -e "SHOW HOSTS" 2>&1)
  SHOW_HOSTS_EXIT=$?
  
  # If SHOW HOSTS succeeded and no ONLINE found, try ADD HOSTS
  if [ $SHOW_HOSTS_EXIT -eq 0 ] && ! echo "$SHOW_HOSTS" | grep -q "ONLINE"; then
    nebula-console -addr "$GRAPHD_ADDR" -port 9669 -u root -p nebula -e "ADD HOSTS \"$STORAGED_ADDR\":9779" >/dev/null 2>&1 || true
  fi
  
  sleep 30
done
EOF

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

# Build for dual-arch: linux/amd64, linux/arm64 with buildx
# docker buildx build --platform linux/amd64,linux/arm64 -t weygu/nebula-storage-activator:v3 . --push
