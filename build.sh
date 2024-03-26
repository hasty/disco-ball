OUTPUT_DIR=$(pwd)
pushd ../alchemy
GOOS=linux GOARCH=amd64 go build -ldflags="-X 'github.com/hasty/alchemy/config.Tag=$(git describe --tags)'" -o ${OUTPUT_DIR}/alchemy-disco-linux-x64 -tags github 
popd
