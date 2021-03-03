cd /digitaltwin
npm run-script build

# run api server
cd /digitaltwin/api
sudo chmod a+rwx server.log
nohup npm start > server.log 2>&1 &
exit

# Clean working folder
# sudo find /digitaltwin/api/api-tests -type f -delete
